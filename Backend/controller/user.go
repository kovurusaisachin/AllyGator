package controller

import (
	"allygator.com/gatorweb/models"
)

type User struct {
	FirstName      string `json:"firstname"`
	LastName       string `json:"lastname"`
	Password       string `json:"password"`
	UFmail         string `json:"email"`
	Gender         string `json:"gender"`
	Course         string `json:"course"`
	URL            string `json:"url"`
	Nationality    string `json:"nationality"`
	Profile        string `json:"profile"`
	Specialization string `json:"specialization"`
	Review         string `json:"review"`
	Posts          string `json:"posts"`
	Chats          string `json:"chats"`
	Program        string `json:"program"`
}

//function GetUsers
func GetUsers() ([]User, error) {

	rows, err := models.DB.Query("SELECT firstname, lastname, email, gender, course, url, nationality, profile, specialization, review, posts, chats, program from users")
	// Select * from user TABLE
	if err != nil {
		return nil, err
	}
	//Checking for an error on the query and defering the Close() method for the tuples to ensure it doesn’t stay open after we’re done.
	defer rows.Close()

	people := make([]User, 0)

	for rows.Next() {
		singleUser := User{}
		err = rows.Scan(&singleUser.FirstName, &singleUser.LastName, &singleUser.UFmail, &singleUser.Gender, &singleUser.Course, &singleUser.URL, &singleUser.Nationality, &singleUser.Profile, &singleUser.Specialization, &singleUser.Review, &singleUser.Posts, &singleUser.Chats, &singleUser.Program)

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
