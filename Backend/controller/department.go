package controller

import (

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
