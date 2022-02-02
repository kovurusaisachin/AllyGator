package models

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3" //sqlite3 driver for go using database/sql
)

//The sqlite3 driver returns a *DB. So, we are storing it in the variable DB globally to use it without having to reconnect again.
var DB *sql.DB

//function to create a connection to SQLite Database
func ConnectDatabase() error {
	db, err := sql.Open("sqlite3", "./allygator.db")
	if err != nil {
		panic("Failed to connect to database!")
	}

	DB = db
	return nil
}
