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

//This function retrieves the list of all the posts from the database
func GetPosts() ([]Post, error) {

	rows, err := models.DB.Query("SELECT idPost, idUser, description, title, category from posts")

	if err != nil {
		return nil, err
	}
	//Checking for an error on the query and defering the Close() method for the tuples to ensure it doesn’t stay open after we’re done.
	defer rows.Close()

	post := make([]Post, 0)

	for rows.Next() {
		singlePost := Post{}
		err = rows.Scan(&singlePost.PostId, &singlePost.StudentId, &singlePost.Description, &singlePost.Title, &singlePost.Category)

		if err != nil {
			return nil, err
		}
		post = append(post, singlePost)
	}

	err = rows.Err()

	if err != nil {
		return nil, err
	}

	return post, err
}
