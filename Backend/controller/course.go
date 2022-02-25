package controller

import (
	"database/sql"
	"fmt"
	"allygator.com/gatorweb/models"
)

type Course struct {
	CourseId       int    `json:"idCourse"`
	CourseName     string `json:"coursename"`
	DepartmentId   int    `json:"idDepartment"`
	FacultyId      int    `json:"idFaculty"`
	FacultyName    string `json:"facultyname"`
	DepartmentName string `json:"deptName"`
}

//This function retrieves the list of all the courses from the database
func GetCourses() ([]Course, error) {

	rows, err := models.DB.Query("SELECT c.idCourse, c.coursename, d.deptName, c.idDepartment, c.idFaculty, f.facultyname from course As c Join departments as d on c.idDepartment=d.idDepartment Join faculty f on c.idFaculty = f.idFaculty")
	if err != nil {
		return nil, err
	}
	//Checking for an error on the query and defering the Close() method for the tuples to ensure it doesn’t stay open after we’re done.
	defer rows.Close()
	//creating a slice - dynamic array
	course := make([]Course, 0)

	for rows.Next() {
		singleCourse := Course{}
		err = rows.Scan(&singleCourse.CourseId, &singleCourse.CourseName, &singleCourse.DepartmentName, &singleCourse.DepartmentId, &singleCourse.FacultyId, &singleCourse.FacultyName)

		if err != nil {
			return nil, err
		}
		course = append(course, singleCourse)
	}

	err = rows.Err()

	if err != nil {
		return nil, err
	}

	return course, err
}

//This function is used to retrieve the course details by ID
func GetCourseById(idCourse string) (Course, error) {

	stmt, err := models.DB.Prepare("SELECT c.idCourse, c.coursename, d.deptName, c.idDepartment, c.idFaculty, f.facultyname from course As c Join departments as d on c.idDepartment=d.idDepartment join faculty as f on c.idFaculty = f.idFaculty where c.idCourse = ?")

	if err != nil {
		return Course{}, err
	}

	course := Course{}

	sqlErr := stmt.QueryRow(idCourse).Scan(&course.CourseId, &course.CourseName, &course.DepartmentName, &course.DepartmentId, &course.FacultyId, &course.FacultyName)

	if sqlErr != nil {
		if sqlErr == sql.ErrNoRows {
			return Course{}, nil
		}
		return Course{}, sqlErr
	}
	return course, nil
}

//This function is used to append the Course details into the database
func AddCourses(newCourse Course) (bool, error) {

	tx, err := models.DB.Begin()
	if err != nil {
		return false, err
	}

	stmt, err := tx.Prepare("INSERT INTO course ( coursename, idDepartment, idFaculty) VALUES ( ?, ?, ?)")

	if err != nil {
		return false, err
	}

	defer stmt.Close()

	tempCourse := courseExists(newCourse.CourseId)
	if tempCourse {
		return false, fmt.Errorf("Course already exists with the same course ID")
	} else {
		_, err = stmt.Exec(newCourse.CourseName, newCourse.DepartmentId, newCourse.FacultyId)

		if err != nil {
			return false, err
		}

		tx.Commit()

		return true, nil
	}
}

//This function is used to Update the Courset details by ID
func UpdateCourse(ourCourse Course, idCourse int) (bool, error) {

	tx, err := models.DB.Begin()
	if err != nil {
		return false, err
	}

	stmt, err := tx.Prepare("UPDATE course SET coursename = ? , idDepartment = ? , idFaculty = ? , facultyname = ? , deptName = ? WHERE idCourse = ?")
	if err != nil {
		return false, err
	}

	defer stmt.Close()

	_, err = stmt.Exec(ourCourse.CourseName, ourCourse.DepartmentId, ourCourse.FacultyId, ourCourse.FacultyName, ourCourse.DepartmentName, idCourse)

	if err != nil {
		return false, err
	}

	tx.Commit()

	return true, nil
}

//This function returns true if the Course with the same ID exists or not.
func courseExists(courseId int) bool {
	row := models.DB.QueryRow("select idCourse from Course where idCourse= ?", courseId)
	temp := ""
	row.Scan(&temp)
	return temp != ""
}
