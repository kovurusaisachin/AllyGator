package api

import (
	"net/http"
	"strconv"

	"allygator.com/gatorweb/controller"
	"github.com/gin-gonic/gin"
)

func GetDepartments(c *gin.Context) {
	departments, err := controller.GetDepartments()
	checkErr(err)

	if departments == nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "No Records Found"})
		return
	} else {
		c.JSON(http.StatusOK, gin.H{"data": departments})
	}
}

func GetDepartmentById(c *gin.Context) {
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

func AddDepartment(c *gin.Context) {
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

func UpdateDepartment(c *gin.Context) {
	id := c.Param("id")

	dept, err := controller.GetDepartmentById(id)
	checkErr(err)
	// if the Departmentname is blank we can assume nothing is found and no need to perform Update task
	if dept.DepartmentName == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Could not find this Department ID in our records to Update"})
		return
	} else {
		var json controller.Department

		if err := c.ShouldBindJSON(&json); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		deptId, err := strconv.Atoi(c.Param("id"))

		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid Department ID"})
		}

		success, err := controller.UpdateDepartment(json, deptId)

		if success {
			c.JSON(http.StatusOK, gin.H{"message": "Success"})
		} else {
			c.JSON(http.StatusBadRequest, gin.H{"error": err})
		}
	}
}
