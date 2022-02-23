package controller

import (
	"fmt"

	"allygator.com/gatorweb/models"
)

type Chat struct {
	ConnectedId int    `json:"idConnected"`
	UserId      int    `json:"idUser"`
	UserFname   string `json:"firstname"`
	UserLname   string `json:"lastname"`
}

func GetChat() ([]Chat, error) {
	rows, err := models.DB.Query("Select c.idConnected,c.idUser, u.firstname, u.lastname from chats as c join users as u on c.idConnected = u.idStudent ")
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	chat := make([]Chat, 0)
	for rows.Next() {
		i := Chat{}
		err = rows.Scan(&i.ConnectedId, &i.UserId, &i.UserFname, &i.UserLname)
		if err != nil {
			return nil, err
		}
		chat = append(chat, i)
	}
	err = rows.Err()
	if err != nil {
		return nil, err
	}
	return chat, err
}

func GetChatById(idUser string) ([]Chat, error) {

	stmt, err := models.DB.Prepare("Select c.idConnected,c.idUser, u.firstname, u.lastname from chats as c join users as u on c.idConnected = u.idStudent where c.idUser = ?")

	if err != nil {
		return nil, err
	}
	defer stmt.Close()
	rows, err := stmt.Query(idUser)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	chat := make([]Chat, 0)
	for rows.Next() {
		i := Chat{}
		err := rows.Scan(&i.ConnectedId, &i.UserId, &i.UserFname, &i.UserLname)
		if err != nil {
			return nil, err
		}
		chat = append(chat, i)

	}
	if err = rows.Err(); err != nil {
		return nil, err
	}
	return chat, nil
}

func AddChat(newChat Chat) (bool, error) {
	tx, err := models.DB.Begin()
	if err != nil {
		return false, err
	}
	stmt, err := tx.Prepare("INSERT INTO chats (idConnected, idUser) VALUES (?,?)")

	if err != nil {
		return false, err
	}

	defer stmt.Close()

	// tempfaculty := chatExists(newChat.ConnectedId)
	tempfaculty := false
	if tempfaculty {
		return false, fmt.Errorf("connection already exists with the same user ID")
	} else {
		_, err = stmt.Exec(newChat.ConnectedId, newChat.UserId)
		if err != nil {
			return false, err
		}

		tx.Commit()

		return true, nil
	}

}

//This function is used to Update the Department details by ID
func UpdateChat(ourChat Chat, idUser int) (bool, error) {

	tx, err := models.DB.Begin()
	if err != nil {
		return false, err
	}

	stmt, err := tx.Prepare("UPDATE chats SET idConnected = ? WHERE idUser = ?")
	if err != nil {
		return false, err
	}

	defer stmt.Close()

	_, err = stmt.Exec(ourChat.ConnectedId, idUser)

	if err != nil {
		return false, err
	}

	tx.Commit()

	return true, nil
}

//This function returns true if the Department with the same ID exists or not.
// func chatExists(ConnectedId int) bool {
//  row := models.DB.QueryRow("select idConnected  from chats where idConnected= ?", ConnectedId)
//  temp := ""
//  row.Scan(&temp)
//  return temp != ""
// }
