package main

import (
	"log"
	"net/http"

	"allygator.com/gatorweb/controller"
	"allygator.com/gatorweb/models"
	"github.com/gin-gonic/gin"
)

func main() {
	err := models.ConnectDatabase()
	checkErr(err)
	r := gin.Default()
	// API v1
	v1 := r.Group("/api/v1")
	{
		v1.GET("user", getUsers)
		v1.GET("user/:id", getUserById)
		v1.POST("register", addUser)
		v1.PUT("user/:id", updateUser)
		v1.DELETE("user/:id", deleteUser)
	}

	// By default it serves on :8080 unless a
	// PORT environment variable was defined.
	r.Run()
}

func getUsers(c *gin.Context) {
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

func getUserById(c *gin.Context) {
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

func addUser(c *gin.Context) {
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

func updateUser(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "updateUser Called"})
}

func deleteUser(c *gin.Context) {
	id := c.Param("id")
	c.JSON(http.StatusOK, gin.H{"message": "deleteUser " + id + " Called"})
}
func checkErr(err error) {
	if err != nil {
		log.Fatal(err)
	}
}
