package api

import (
	"net/http"
	"strconv"

	"allygator.com/gatorweb/controller"
	"github.com/gin-gonic/gin"
)

func GetFaculty(c *gin.Context) {
	faculty, err := controller.Getfacultys()
	checkErr(err)

	if faculty == nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "No Records Found"})
		return
	} else {
		c.JSON(http.StatusOK, gin.H{"data": faculty})
	}
}
func GetFacultyById(c *gin.Context) {
	id := c.Param("id")
	faculty, err := controller.GetFacultyById(id)
	checkErr(err)
	if faculty.FacultyName == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Could not find this Faculty ID in our records"})
		return
	} else {
		c.JSON(http.StatusOK, gin.H{"data": faculty})
	}

}
func AddFaculty(c *gin.Context) {
	var json controller.Faculty

	if err := c.ShouldBindJSON(&json); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	success, err := controller.Addfacultys(json)

	if success {
		c.JSON(http.StatusOK, gin.H{"message": "Success"})
	} else {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}
}
func UpdateFaculty(c *gin.Context) {
	id := c.Param("id")

	faculty, err := controller.GetFacultyById(id)
	checkErr(err)
	// if the Coursename is blank we can assume nothing is found and no need to perform Update task
	if faculty.FacultyName == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Could not find this faculty ID in our records to Update"})
		return
	} else {
		var json controller.Faculty

		if err := c.ShouldBindJSON(&json); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		courseId, err := strconv.Atoi(c.Param("id"))

		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid faculty ID"})
		}

		success, err := controller.UpdateFaculty(json, courseId)

		if success {
			c.JSON(http.StatusOK, gin.H{"message": "Success"})
		} else {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		}
	}
}
