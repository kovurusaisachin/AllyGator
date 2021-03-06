package controller

import (
	"database/sql"

	"fmt"

	"allygator.com/gatorweb/models"
	"golang.org/x/crypto/bcrypt"
)

type User struct {
	StudentId      int    `json:"idStudent"`
	FirstName      string `json:"firstname"`
	LastName       string `json:"lastname"`
	Department     int    `json:"department"`
	Password       string `json:"password"`
	UFmail         string `json:"email"`
	Gender         string `json:"gender"`
	Course         string `json:"course"`
	URL            string `json:"url"`
	Nationality    string `json:"nationality"`
	Profile        string `json:"profile"`
	Specialization string `json:"specialization"`
	Status         string `json:"status"`
	DepartmentName string `json:"deptName"`
}

//This function retrieves the list of all the students from the database
func GetUsers() ([]User, error) {

	rows, err := models.DB.Query("SELECT idStudent, firstname, lastname, department, email, gender, course, url, nationality, profile, specialization, status from users")

	if err != nil {
		return nil, err
	}
	//Checking for an error on the query and defering the Close() method for the tuples to ensure it doesn’t stay open after we’re done.
	defer rows.Close()

	people := make([]User, 0)

	for rows.Next() {
		singleUser := User{}
		err = rows.Scan(&singleUser.StudentId, &singleUser.FirstName, &singleUser.LastName, &singleUser.Department, &singleUser.UFmail, &singleUser.Gender, &singleUser.Course, &singleUser.URL, &singleUser.Nationality, &singleUser.Profile, &singleUser.Specialization, &singleUser.Status)

		if err != nil {
			return nil, err
		}
		people = append(people, singleUser)
	}

	err = rows.Err()

	if err != nil {
		return nil, err
	}

	return people, err
}

//This function retrieves the list of all the students from the database along with the Department name
func GetUserswithDepartment() ([]User, error) {

	rows, err := models.DB.Query("SELECT u.idStudent, u.firstname, u.lastname, u.department , d.deptname, u.email, u.gender, u.course, u.url, u.nationality, u.profile, u.specialization, u.status from users u Join departments as d on d.idDepartment=u.Department")
	if err != nil {
		return nil, err
	}
	//Checking for an error on the query and defering the Close() method for the tuples to ensure it doesn’t stay open after we’re done.
	defer rows.Close()

	people := make([]User, 0)

	for rows.Next() {
		singleUser := User{}
		err = rows.Scan(&singleUser.StudentId, &singleUser.FirstName, &singleUser.LastName, &singleUser.Department, &singleUser.DepartmentName, &singleUser.UFmail, &singleUser.Gender, &singleUser.Course, &singleUser.URL, &singleUser.Nationality, &singleUser.Profile, &singleUser.Specialization, &singleUser.Status)

		if err != nil {
			return nil, err
		}
		people = append(people, singleUser)
	}

	err = rows.Err()

	if err != nil {
		return nil, err
	}

	return people, err
}

//This function is used to append the student details into the database
func AddUsers(newUser User) (bool, error) {

	tx, err := models.DB.Begin()
	if err != nil {
		return false, err
	}

	stmt, err := tx.Prepare("INSERT INTO users (firstname, lastname, department, password, email, gender, course, url, nationality, profile, specialization, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)")

	if err != nil {
		return false, err
	}

	defer stmt.Close()

	tempmail := emailExists(newUser.UFmail)
	if tempmail {
		return false, fmt.Errorf("Student already exists with the same email")
	} else {

		hashedPass, err := bcrypt.GenerateFromPassword([]byte(newUser.Password), bcrypt.DefaultCost)

		if err != nil {
			return false, fmt.Errorf("Error in Hashing the password")
		}

		newUser.Password = string(hashedPass)
		_, err = stmt.Exec(newUser.FirstName, newUser.LastName, newUser.Department, newUser.Password, newUser.UFmail, newUser.Gender, newUser.Course, newUser.URL, newUser.Nationality, newUser.Profile, newUser.Specialization, newUser.Status)

		if err != nil {
			return false, err
		}

		tx.Commit()

		return true, nil
	}
}

//This function is used to retrieve the student details by ID
func GetUserById(idStudent string) (User, error) {

	stmt, err := models.DB.Prepare("SELECT idStudent, firstname, lastname, department, password, email, gender, course, url, nationality, profile, specialization, status from users WHERE idStudent = ?")

	if err != nil {
		return User{}, err
	}

	user := User{}

	sqlErr := stmt.QueryRow(idStudent).Scan(&user.StudentId, &user.FirstName, &user.LastName, &user.Department, &user.Password, &user.UFmail, &user.Gender, &user.Course, &user.URL, &user.Nationality, &user.Profile, &user.Specialization, &user.Status)

	if sqlErr != nil {
		if sqlErr == sql.ErrNoRows {
			return User{}, nil
		}
		return User{}, sqlErr
	}
	return user, nil
}

func GetUsersForConnectionTable(idUser string) ([]User, error) {

	stmt, err := models.DB.Prepare("SELECT u.idStudent, u.firstname, u.lastname, u.department, u.password, u.email, u.gender, u.course, u.url, u.nationality, u.profile, u.specialization, u.status from chats as c join users as u on u.idStudent == c.idConnected where c.idUser = ?")

	if err != nil {
		return nil, err
	}
	defer stmt.Close()
	rows, err := stmt.Query(idUser)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	user := make([]User, 0)
	for rows.Next() {
		i := User{}
		err := rows.Scan(&i.StudentId, &i.FirstName, &i.LastName, &i.Department, &i.Password, &i.UFmail, &i.Gender, &i.Course, &i.URL, &i.Nationality, &i.Profile, &i.Specialization, &i.Status)
		if err != nil {
			return nil, err
		}
		user = append(user, i)

	}
	if err = rows.Err(); err != nil {
		return nil, err
	}
	return user, nil
}

//This function is used to retrieve the student details by EmailID
func GetUserByEmail(email string) (User, error) {

	stmt, err := models.DB.Prepare("SELECT idStudent, firstname, lastname from users WHERE email = ?")

	if err != nil {
		return User{}, err
	}

	user := User{}

	sqlErr := stmt.QueryRow(email).Scan(&user.StudentId, &user.FirstName, &user.LastName)

	if sqlErr != nil {
		if sqlErr == sql.ErrNoRows {
			return User{}, nil
		}
		return User{}, sqlErr
	}
	return user, nil
}

//This function is used to Update the student details by ID
func UpdateUser(ourUser User, idStudent int) (bool, error) {

	tx, err := models.DB.Begin()
	if err != nil {
		return false, err
	}

	stmt, err := tx.Prepare("UPDATE users SET firstname = ?, lastname = ?, department = ?, password = ?, email = ?, gender = ?, course =?, url = ?, nationality = ?, profile = ?, specialization = ?, status = ? WHERE idStudent = ?")
	if err != nil {
		return false, err
	}

	defer stmt.Close()
	tempmail := emailExists(ourUser.UFmail)

	row1 := models.DB.QueryRow("select idStudent from users where email= ?", ourUser.UFmail)
	var temp1 int
	row1.Scan(&temp1)
	// Checking to see whether the Updated mailID is being used by another student with different StudentID
	if tempmail == true && temp1 != idStudent {
		return false, fmt.Errorf("Email can not be Updated since student with another ID has the same mail ID")
	} else {
		hashedPass, err := bcrypt.GenerateFromPassword([]byte(ourUser.Password), bcrypt.DefaultCost)

		if err != nil {
			return false, fmt.Errorf("Error in Hashing the password")
		}

		ourUser.Password = string(hashedPass)

		_, err = stmt.Exec(ourUser.FirstName, ourUser.LastName, ourUser.Department, ourUser.Password, ourUser.UFmail, ourUser.Gender, ourUser.Course, ourUser.URL, ourUser.Nationality, ourUser.Profile, ourUser.Specialization, ourUser.Status, idStudent)

		if err != nil {
			return false, err
		}

		tx.Commit()

		return true, nil
	}
}

//This function is used to Delete the student details by ID
func DeleteUser(idStudent int) (bool, error) {

	tx, err := models.DB.Begin()

	if err != nil {
		return false, err
	}

	stmt, err := models.DB.Prepare("DELETE from users where idStudent = ?")

	if err != nil {
		return false, err
	}

	defer stmt.Close()

	_, err = stmt.Exec(idStudent)

	if err != nil {
		return false, err
	}

	tx.Commit()

	return true, nil
}

//The below function is used to check whether the email exists or not in the Database
func emailExists(email string) bool {
	row := models.DB.QueryRow("select email from users where email= ?", email)
	temp := ""
	row.Scan(&temp)
	return temp != ""
}
