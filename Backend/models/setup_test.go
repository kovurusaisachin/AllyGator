package models

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

//function to create a connection to SQLite Database
func TestConnectDatabase(t *testing.T) {
	err := ConnectDatabase()
	assert.NoError(t, err)
}
