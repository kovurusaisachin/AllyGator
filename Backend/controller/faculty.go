package controller

import (
	"database/sql"
	"fmt"

	"allygator.com/gatorweb/models"
)

type Faculty struct {
	FacultyId      int    `json:"idFaculty"`
	FacultyName    string `json:"facultyname"`
	DepartmentId   int    `json:"idDepartment"`
	Info           string `json:"info"`
	DepartmentName string `json:"deptName"`
}

//This function retrieves the list of all the facultys from the database
func Getfacultys() ([]Faculty, error) {
	rows, err := models.DB.Query("SELECT f.idFaculty, f.facultyname, f.info, d.deptName from faculty f Join departments As d on d.idDepartment=f.idDepartment ")
	if err != nil {
		return nil, err
	}
	//Checking for an error on the query and defering the Close() method for the tuples to ensure it doesn’t stay open after we’re done.
	defer rows.Close()
	//creating a slice - dynamic array
	faculty := make([]Faculty, 0)
	for rows.Next() {
		singlefaculty := Faculty{}
		err = rows.Scan(&singlefaculty.FacultyId, &singlefaculty.FacultyName, &singlefaculty.Info, &singlefaculty.DepartmentName)
		if err != nil {
			return nil, err
		}
		faculty = append(faculty, singlefaculty)
	}

	err = rows.Err()

	if err != nil {
		return nil, err
	}
	return faculty, err
}

//This function is used to retrieve the Department details by ID
func GetFacultyById(idFaculty string) (Faculty, error) {
	stmt, err := models.DB.Prepare("SELECT f.idFaculty, f.facultyname, f.info, d.deptName from faculty as f Join departments As d on d.idDepartment=f.idDepartment  where f.idFaculty = ?")

	if err != nil {
		return Faculty{}, err
	}

	faculty := Faculty{}

	sqlErr := stmt.QueryRow(idFaculty).Scan(&faculty.FacultyId, &faculty.FacultyName, &faculty.Info, &faculty.DepartmentName)

	if sqlErr != nil {
		if sqlErr == sql.ErrNoRows {
			return Faculty{}, nil
		}
		return Faculty{}, sqlErr
	}
	return faculty, nil
}

//This function is used to append the faculty details into the database
func Addfacultys(newfaculty Faculty) (bool, error) {
	tx, err := models.DB.Begin()
	if err != nil {
		return false, err
	}

	stmt, err := tx.Prepare("INSERT INTO faculty (facultyname, idDepartment, info) VALUES (?, ?, ?)")

	if err != nil {
		return false, err
	}

	defer stmt.Close()

	tempfaculty := facultyExists(newfaculty.FacultyId)
	if tempfaculty {
		fmt.Println("faculty already exists with the same faculty ID")
		return false, nil
	} else {
		_, err = stmt.Exec(newfaculty.FacultyName, newfaculty.DepartmentId, newfaculty.Info)
		if err != nil {
			return false, err
		}

		tx.Commit()

		return true, nil
	}
}

//This function returns true if the Department with the same ID exists or not.
func facultyExists(facultyId int) bool {
	row := models.DB.QueryRow("select idfaculty from faculty where idfaculty= ?", facultyId)
	temp := ""
	row.Scan(&temp)
	return temp != ""
}
