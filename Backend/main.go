package main

import (
	"log"

	"allygator.com/gatorweb/models"
	"allygator.com/gatorweb/routers/api"
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
		v1.GET("user", api.GetUsers)
		v1.GET("user/:id", api.GetUserById)
		v1.POST("register", api.AddUser)
		v1.PUT("user/:id", api.UpdateUser)
		v1.DELETE("user/:id", api.DeleteUser)

		//Department APIs
		v1.GET("department", api.GetDepartments)
		v1.GET("department/:id", api.GetDepartmentById)
		v1.POST("addDept", api.AddDepartment)
		v1.PUT("department/:id", api.UpdateDepartment)
		v1.DELETE("department/:id", api.DeleteDepartment)

		//chat api
		v1.GET("chat", api.GetChat)
		v1.GET("chat/:id", api.GetChatById)
		v1.POST("addChat", api.AddChat)
		// v1.PUT("chat/:id", api.UpdateChat)

		//Course APIs
		v1.GET("course", api.GetCourses)
		v1.GET("course/:id", api.GetCourseById)
		v1.POST("addCourse", api.AddCourse)
		v1.PUT("course/:id", api.UpdateCourse)
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

func checkErr(err error) {
	if err != nil {
		log.Fatal(err)
	}
}
