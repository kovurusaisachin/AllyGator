package api

import (
	"log"
	"net/http"
	"strconv"

	"allygator.com/gatorweb/controller"
	"github.com/gin-gonic/gin"
)

func GetUsers(c *gin.Context) {
	//c.JSON(http.StatusOK, gin.H{"message": "getUser Called"})
	persons, err := controller.GetUsers()
	checkErr(err)

	if persons == nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "No Records Found"})
		return
	} else {
		c.JSON(http.StatusOK, gin.H{"data": persons})
	}
}

func GetUserById(c *gin.Context) {
	id := c.Param("id")

	person, err := controller.GetUserById(id)
	checkErr(err)
	// if the name is blank we can assume nothing is found
	if person.FirstName == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Could not find this student ID in our records"})
		return
	} else {
		c.JSON(http.StatusOK, gin.H{"data": person})
	}
}

func AddUser(c *gin.Context) {
	var json controller.User

	if err := c.ShouldBindJSON(&json); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	success, err := controller.AddUsers(json)

	if success {
		c.JSON(http.StatusOK, gin.H{"message": "Success"})
	} else {
		c.JSON(http.StatusBadRequest, gin.H{"error": err})
	}
}

func UpdateUser(c *gin.Context) {
	id := c.Param("id")

	person, err := controller.GetUserById(id)
	checkErr(err)
	// if the Firstname is blank we can assume nothing is found and no need to perform Update task
	if person.FirstName == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Could not find this student ID in our records to Update"})
		return
	} else {
		var json controller.User

		if err := c.ShouldBindJSON(&json); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		personId, err := strconv.Atoi(c.Param("id"))

		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid ID"})
		}

		success, err := controller.UpdateUser(json, personId)

		if success {
			c.JSON(http.StatusOK, gin.H{"message": "Success"})
		} else {
			c.JSON(http.StatusBadRequest, gin.H{"error": err})
		}
	}
}

func DeleteUser(c *gin.Context) {
	id := c.Param("id")
	c.JSON(http.StatusOK, gin.H{"message": "deleteUser " + id + " Called"})
}

func checkErr(err error) {
	if err != nil {
		log.Fatal(err)
	}
}
