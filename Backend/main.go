package main

import (
	"log"

	"allygator.com/gatorweb/middlewares"
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
	v1 := r.Group("/api")
	{
		//Public User APIs
		v1.POST("/v1/register", api.AddUser)
		v1.POST(("/v1/login"), api.Login)

		// Protected APIs
		protected := v1.Group("/v1").Use(middlewares.Authz())
		{
			protected.GET("user", api.GetUsers)
			protected.GET("users", api.GetUserswithDepartment)
			protected.GET("user/:id", api.GetUserById)
			protected.GET("mail/:id", api.GetUserByEmail)
			protected.PUT("user/:id", api.UpdateUser)
			protected.DELETE("user/:id", api.DeleteUser)

			//Department APIs
			protected.GET("department", api.GetDepartments)
			protected.GET("department/:id", api.GetDepartmentById)
			protected.POST("addDept", api.AddDepartment)
			protected.PUT("department/:id", api.UpdateDepartment)
			protected.DELETE("department/:id", api.DeleteDepartment)

			//chat api
			protected.GET("chat", api.GetChat)
			protected.GET("chat/:id", api.GetChatById)
			protected.POST("addChat", api.AddChat)
			// protected.PUT("chat/:id", api.UpdateChat)

			//faculty api
			protected.GET("faculty", api.GetFaculty)
			protected.GET("faculty/:id", api.GetFacultyById)
			protected.POST("addFaculty", api.AddFaculty)
			protected.PUT("faculty/:id", api.UpdateFaculty)

			//Course APIs
			protected.GET("course", api.GetCourses)
			protected.GET("course/:id", api.GetCourseById)
			protected.POST("addCourse", api.AddCourse)
			protected.PUT("course/:id", api.UpdateCourse)
		}

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
