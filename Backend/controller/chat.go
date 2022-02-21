package controller

type Chat struct {
	ConnectedId int    `json:"idConnected"`
	UserId      int    `json:"idUser"`
	UserFname   string `json:"firstname"`
	UserLname   string `json:"lastname"`
}
