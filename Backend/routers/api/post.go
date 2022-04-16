package api

import (
	"net/http"

	"allygator.com/gatorweb/controller"
	"github.com/gin-gonic/gin"
)

func AddPosts(c *gin.Context) {
	var json controller.Post

	if err := c.ShouldBindJSON(&json); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	success, err := controller.AddPosts(json)

	if success {
		c.JSON(http.StatusOK, gin.H{"message": "Success"})
	} else {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}
}

func GetPosts(c *gin.Context) {
	posts, err := controller.GetPosts()
	checkErr(err)

	if posts == nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "No Records Found"})
		return
	} else {
		c.JSON(http.StatusOK, gin.H{"data": posts})
	}
}

func GetPostsByUserId(c *gin.Context) {
	id := c.Param("id")
	posts, err := controller.GetPostsByUserId(id)
	checkErr(err)

	if posts == nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Could not find this user ID in our records"})
		return
	} else {
		c.JSON(http.StatusOK, gin.H{"data": posts})
	}
}

func GetPostsByPostId(c *gin.Context) {
	id := c.Param("id")
	posts, err := controller.GetPostsByPostId(id)
	checkErr(err)

	if posts == nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Could not find this post ID in our records"})
		return
	} else {
		c.JSON(http.StatusOK, gin.H{"data": posts})
	}
}
