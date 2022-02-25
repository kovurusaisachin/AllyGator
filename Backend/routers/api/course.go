package api

import (
	"net/http"
	"strconv"

	"allygator.com/gatorweb/controller"
	"github.com/gin-gonic/gin"
)

func GetCourses(c *gin.Context) {
	courses, err := controller.GetCourses()
	checkErr(err)

	if courses == nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "No Records Found"})
		return
	} else {
		c.JSON(http.StatusOK, gin.H{"data": courses})
	}
}

func GetCourseById(c *gin.Context) {
	id := c.Param("id")
	course, err := controller.GetCourseById(id)
	if err != nil {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"error": "Could not find the data in our records"})
		return
	}
	c.IndentedJSON(http.StatusOK, gin.H{"data": course})

}

func AddCourse(c *gin.Context) {
	var json controller.Course

	if err := c.ShouldBindJSON(&json); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	success, err := controller.AddCourses(json)

	if success {
		c.JSON(http.StatusOK, gin.H{"message": "Success"})
	} else {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}
}

func UpdateCourse(c *gin.Context) {
	id := c.Param("id")

	course, err := controller.GetCourseById(id)
	checkErr(err)
	// if the Coursename is blank we can assume nothing is found and no need to perform Update task
	if course.CourseName == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Could not find this Course ID in our records to Update"})
		return
	} else {
		var json controller.Course

		if err := c.ShouldBindJSON(&json); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		courseId, err := strconv.Atoi(c.Param("id"))

		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid Course ID"})
		}

		success, err := controller.UpdateCourse(json, courseId)

		if success {
			c.JSON(http.StatusOK, gin.H{"message": "Success"})
		} else {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		}
	}
}
