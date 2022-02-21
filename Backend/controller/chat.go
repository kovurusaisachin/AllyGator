package controller

import "allygator.com/gatorweb/models"

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
