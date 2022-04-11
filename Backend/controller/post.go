package controller

import (
	"allygator.com/gatorweb/models"
)

type Post struct {
	PostId      int    `json:"idPost"`
	StudentId   int    `json:"idUser"`
	Description string `json:"description"`
	Title       string `json:"title"`
	Category    string `json:"category"`
}

//This function is used to add the Posts by the students in the FORUM page
func AddPosts(newPost Post) (bool, error) {

	tx, err := models.DB.Begin()
	if err != nil {
		return false, err
	}

	stmt, err := tx.Prepare("INSERT INTO posts (idUser, description, title, category) VALUES (?, ?, ?, ?)")

	if err != nil {
		return false, err
	}

	defer stmt.Close()

	_, err = stmt.Exec(newPost.StudentId, newPost.Description, newPost.Title, newPost.Category)

	if err != nil {
		return false, err
	}

	tx.Commit()

	return true, nil

}
