package controller

type Faculty struct {
	FacultyId      int    `json:"idFaculty"`
	FacultyName    string `json:"facultyname"`
	DepartmentId   int    `json:"idDepartment"`
	Info           string `json:"info"`
	DepartmentName string `json:"deptName"`
}

//This function retrieves the list of all the facultys from the database
func Getfacultys() ([]Faculty, error) {

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
