package api

import (
	"net/http"

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

}
func AddFaculty(c *gin.Context) {

}
