package api

import (
	"net/http"
	"strconv"

	"allygator.com/gatorweb/controller"
	"github.com/gin-gonic/gin"
)

func getCourses(c *gin.Context) {
	courses, err := controller.GetCourses()
	checkErr(err)

	if courses == nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "No Records Found"})
		return
	} else {
		c.JSON(http.StatusOK, gin.H{"data": courses})
	}
}

func getCourseById(c *gin.Context) {
	id := c.Param("id")
	course, err := controller.GetCourseById(id)
	if err != nil {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"error": "Could not find the data in our records"})
		return
	}
	c.IndentedJSON(http.StatusOK, gin.H{"data": course})

}