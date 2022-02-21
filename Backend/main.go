package main

import (
	"fmt"
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
	r.Use(CORSMiddleware())
	// API v1
	v1 := r.Group("/api/v1")
	{
		//User APIs
		v1.GET("user", getUsers)
		v1.GET("user/:id", getUserById)
		v1.POST("register", addUser)
		v1.PUT("user/:id", updateUser)
		v1.DELETE("user/:id", deleteUser)

		//Department APIs
		v1.GET("department", getDepartments)
		v1.GET("department/:id", getDepartmentById)
		v1.POST("addDept", addDepartment)

		//Chat APIs
		v1.GET("chat", getChat)
		v1.GET("chat/:id", getChatById)
		v1.POST("addChat", addChat)
	}

	// By default it serves on :8080 unless a
	// PORT environment variable was defined.
	r.Run()
}

//Function to give support for CORS (Cross-origin resource sharing)
func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {

		c.Header("Access-Control-Allow-Origin", "*")
		c.Header("Access-Control-Allow-Credentials", "true")
		c.Header("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Header("Access-Control-Allow-Methods", "POST, HEAD, PATCH, OPTIONS, GET, PUT")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
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

func getDepartments(c *gin.Context) {
	departments, err := controller.GetDepartments()
	checkErr(err)

	if departments == nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "No Records Found"})
		return
	} else {
		c.JSON(http.StatusOK, gin.H{"data": departments})
	}
}

func getDepartmentById(c *gin.Context) {
	id := c.Param("id")

	department, err := controller.GetDepartmentById(id)
	checkErr(err)
	// if the name is blank we can assume nothing is found
	if department.DepartmentName == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Could not find this Department ID in our records"})
		return
	} else {
		c.JSON(http.StatusOK, gin.H{"data": department})
	}
}

func addDepartment(c *gin.Context) {
	var json controller.Department

	if err := c.ShouldBindJSON(&json); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	success, err := controller.AddDepartments(json)

	if success {
		c.JSON(http.StatusOK, gin.H{"message": "Success"})
	} else {
		c.JSON(http.StatusBadRequest, gin.H{"error": err})
	}
}

func getChat(c *gin.Context) {
	chat, err := controller.GetChat()
	if err != nil {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"error": "No data found"})
	}
	c.IndentedJSON(http.StatusOK, gin.H{"data": chat})
}

func getChatById(c *gin.Context) {
	id := c.Param("id")
	chat, err := controller.GetChatById(id)
	if err != nil {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"error": "No data found"})
	}
	c.IndentedJSON(http.StatusOK, gin.H{"data": chat})
}

func addChat(c *gin.Context) {
	var newChat controller.Chat
	if err := c.BindJSON(&newChat); err != nil {
		return
	}
	success, err := controller.AddChat(newChat)
	if success {
		c.IndentedJSON(http.StatusOK, gin.H{"Message": "Data added successfully"})
	} else {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"data": err})
		fmt.Println(err)
	}

}

func checkErr(err error) {
	if err != nil {
		log.Fatal(err)
	}
}
