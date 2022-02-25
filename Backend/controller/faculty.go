package controller

import "allygator.com/gatorweb/models"

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

}

//This function is used to append the faculty details into the database
func Addfacultys(newfaculty Faculty) (bool, error) {

}

//This function returns true if the Department with the same ID exists or not.
func facultyExists(facultyId int) bool {

}
