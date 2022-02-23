package api

import (
	"fmt"
	"net/http"

	"allygator.com/gatorweb/controller"
	"github.com/gin-gonic/gin"
)

func GetChat(c *gin.Context) {
	chat, err := controller.GetChat()
	if err != nil {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"error": "No data found"})
	}
	c.IndentedJSON(http.StatusOK, gin.H{"data": chat})
}

func GetChatById(c *gin.Context) {
	id := c.Param("id")
	chat, err := controller.GetChatById(id)
	if err != nil {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"error": "No data found"})
	}
	c.IndentedJSON(http.StatusOK, gin.H{"data": chat})
}

func AddChat(c *gin.Context) {
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
