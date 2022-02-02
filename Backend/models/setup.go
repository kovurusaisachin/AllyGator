package models

import (
    "database/sql"

    _ "github.com/mattn/go-sqlite3"
)

func ConnectDatabase() error {
    db, err := sql.Open("sqlite3", "./allygator.db")
    if err != nil {
        panic("Failed to connect to database!")
    }

    DB = db
    return nil
}