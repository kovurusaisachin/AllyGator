package controller

import (
	"database/sql"
	"fmt"

	"allygator.com/gatorweb/models"
)

type Department struct {
	DepartmentId   int    `json:"idDepartment"`
	DepartmentName string `json:"deptName"`
}

//This function retrieves the list of all the departments from the database
func GetDepartments() ([]Department, error) {

	rows, err := models.DB.Query("SELECT idDepartment, deptName from departments")
	// Select idDepartment, deptName from departments TABLE
	if err != nil {
		return nil, err
	}
	//Checking for an error on the query and defering the Close() method for the tuples to ensure it doesn’t stay open after we’re done.
	defer rows.Close()

	dept := make([]Department, 0)

	for rows.Next() {
		singleDepartment := Department{}
		err = rows.Scan(&singleDepartment.DepartmentId, &singleDepartment.DepartmentName)

		if err != nil {
			return nil, err
		}
		dept = append(dept, singleDepartment)
	}

	err = rows.Err()

	if err != nil {
		return nil, err
	}

	return dept, err
}

//This function is used to retrieve the Department details by ID
func GetDepartmentById(idDepartment string) (Department, error) {

	stmt, err := models.DB.Prepare("SELECT idDepartment, deptName from departments WHERE idDepartment = ?")

	if err != nil {
		return Department{}, err
	}

	department := Department{}

	sqlErr := stmt.QueryRow(idDepartment).Scan(&department.DepartmentId, &department.DepartmentName)

	if sqlErr != nil {
		if sqlErr == sql.ErrNoRows {
			return Department{}, nil
		}
		return Department{}, sqlErr
	}
	return department, nil
}

//This function is used to append the Department details into the database
func AddDepartments(newDepartment Department) (bool, error) {

	tx, err := models.DB.Begin()
	if err != nil {
		return false, err
	}

	stmt, err := tx.Prepare("INSERT INTO departments (idDepartment, deptName) VALUES (?, ?)")

	if err != nil {
		return false, err
	}

	defer stmt.Close()

	tempdepartment := departmentExists(newDepartment.DepartmentId)
	if tempdepartment {
		fmt.Println("Department already exists with the same department ID")
		return false, nil
	} else {
		_, err = stmt.Exec(newDepartment.DepartmentId, newDepartment.DepartmentName)

		if err != nil {
			return false, err
		}

		tx.Commit()

		return true, nil
	}
}

//This function is used to Update the Department details by ID
func UpdateDepartment(ourDepartment Department, idDepartment int) (bool, error) {

	tx, err := models.DB.Begin()
	if err != nil {
		return false, err
	}

	stmt, err := tx.Prepare("UPDATE departments SET deptName = ? WHERE idDepartment = ?")
	if err != nil {
		return false, err
	}

	defer stmt.Close()

	_, err = stmt.Exec(ourDepartment.DepartmentName, idDepartment)

	if err != nil {
		return false, err
	}

	tx.Commit()

	return true, nil
}

//This function returns true if the Department with the same ID exists or not.
func departmentExists(idDepartment int) bool {
	row := models.DB.QueryRow("select idDepartment from departments where idDepartment= ?", idDepartment)
	temp := ""
	row.Scan(&temp)
	return temp != ""
}
