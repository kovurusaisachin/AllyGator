// Golang REST API unit testing program
package api

import (
	"bytes"
	"fmt"
	"log"
	"net/http"
	"net/http/httptest"
	"testing"

	"allygator.com/gatorweb/models"

	"github.com/gin-gonic/gin"
)

var uniqueChat = []byte(`{
    "idConnected": 2,
    "idUser": 1

}`)

//AddChat API Unit-test
func TestAddChat(t *testing.T) {
	err := models.ConnectDatabase()
	if err != nil {
		log.Fatal(err)
	}
	// Switching to test mode so we don't get such noisy output
	gin.SetMode(gin.TestMode)

	// Settingup the router, and
	// registering the routes
	r := gin.Default()
	v1 := r.Group("/api/v1")
	v1.POST("addChat", AddChat)

	t.Run("Empty JSON Data", func(t *testing.T) {

		req, err := http.NewRequest(http.MethodPost, "/api/v1/addChat", bytes.NewBuffer(emptyData))
		if err != nil {
			t.Fatalf("Couldn't create request: %v\n", err)
		}

		// Creating a response recorder so that we can inspect the response
		w := httptest.NewRecorder()

		// Performing the request
		fmt.Print("\nMock API for Add Chat - Sending Empty Data\n")
		r.ServeHTTP(w, req)
		fmt.Println(w.Body)
		fmt.Print("\n\n")
		// Checking if the response was what we expected
		if w.Code == http.StatusOK {
			t.Logf("Expected to get status %d is same ast %d\n", http.StatusOK, w.Code)
		} else {
			t.Logf("Expected to get status %d but instead got %d\n", http.StatusOK, w.Code)
		}
	})

	t.Run("Chat", func(t *testing.T) {

		req, err := http.NewRequest(http.MethodPost, "/api/v1/addChat", bytes.NewBuffer(uniqueChat))
		if err != nil {
			t.Fatalf("Couldn't create request: %v\n", err)
		}

		// Creating a response recorder so that we can inspect the response
		w := httptest.NewRecorder()

		// Performing the request
		fmt.Print("\nMock API for Add Chat - Adding the connections\n")
		r.ServeHTTP(w, req)
		fmt.Println(w.Body)
		fmt.Print("\n\n")
		// Checking if the response was what we expected
		if w.Code == http.StatusOK {
			t.Logf("Expected to get status %d is same ast %d\n", http.StatusOK, w.Code)
		} else {
			t.Logf("Expected to get status %d but instead got %d\n", http.StatusOK, w.Code)
		}
	})
}

//getChat API Unit-test
func TestGetChat(t *testing.T) {
	err := models.ConnectDatabase()
	if err != nil {
		log.Fatal(err)
	}
	// Switching to test mode so we don't get such noisy output
	gin.SetMode(gin.TestMode)

	// Settingup the router, and
	// registering the routes
	r := gin.Default()
	v1 := r.Group("/api/v1")
	v1.GET("chat", GetChat)

	t.Run("Wrong URL", func(t *testing.T) {
		req, err := http.NewRequest(http.MethodGet, "/api/v1/chats", nil)
		if err != nil {
			t.Fatalf("Couldn't create request: %v\n", err)
		}

		// Creating a response recorder so that we can inspect the response
		w := httptest.NewRecorder()

		// Performing the request
		fmt.Print("\nMock API for getChats - Sending wrong URL\n")
		r.ServeHTTP(w, req)
		fmt.Println(w.Body)
		fmt.Print("\n\n")
		// Checking if the response was what we expected
		if w.Code == http.StatusOK {
			t.Logf("Expected to get status %d is same ast %d\n", http.StatusOK, w.Code)
		} else {
			t.Logf("Expected to get status %d but instead got %d\n", http.StatusOK, w.Code)
		}
	})

	t.Run("Valid URL", func(t *testing.T) {
		req, err := http.NewRequest(http.MethodGet, "/api/v1/chat", nil)
		if err != nil {
			t.Fatalf("Couldn't create request: %v\n", err)
		}

		// Creating a response recorder so that we can inspect the response
		w := httptest.NewRecorder()

		// Performing the request
		fmt.Print("\nMock API for getChats - Sending correct URL\n")
		r.ServeHTTP(w, req)
		fmt.Print("\n\n")
		fmt.Println(w.Body)
		fmt.Print("\n\n")
		// Checking if the response was what we expected
		if w.Code == http.StatusOK {
			t.Logf("Expected to get status %d is same ast %d\n", http.StatusOK, w.Code)
		} else {
			t.Fatalf("Expected to get status %d but instead got %d\n", http.StatusOK, w.Code)
		}
	})
}

//getChatById API Unit-test
func TestGetChatById(t *testing.T) {
	err := models.ConnectDatabase()
	if err != nil {
		log.Fatal(err)
	}
	// Switching to test mode so we don't get such noisy output
	gin.SetMode(gin.TestMode)

	// Settingup the router, and
	// registering the routes
	r := gin.Default()
	v1 := r.Group("/api/v1")
	v1.GET("chat/:id", GetChatById)

	t.Run("Incorrect UserID", func(t *testing.T) {
		req, err := http.NewRequest(http.MethodGet, "/api/v1/chat/111", nil)
		if err != nil {
			t.Fatalf("Couldn't create request: %v\n", err)
		}

		// Creating a response recorder so that we can inspect the response
		w := httptest.NewRecorder()

		// Performing the request
		fmt.Print("\nMock API for getChatById - Sending the incorrect UserID\n")
		r.ServeHTTP(w, req)
		fmt.Print("\n\n")
		fmt.Println(w.Body)
		fmt.Print("\n\n")
		// Checking if the response was what we expected
		if w.Code == http.StatusOK {
			t.Logf("Expected to get status %d is same ast %d\n", http.StatusOK, w.Code)
		} else {
			t.Logf("Expected to get status %d but instead got %d\n", http.StatusOK, w.Code)
		}
	})
	t.Run("Correct ChatID", func(t *testing.T) {
		req, err := http.NewRequest(http.MethodGet, "/api/v1/chat/1", nil)
		if err != nil {
			t.Fatalf("Couldn't create request: %v\n", err)
		}

		// Creating a response recorder so that we can inspect the response
		w := httptest.NewRecorder()

		// Performing the request
		fmt.Print("\nMock API for getChatById - Sending correct UserID\n")
		r.ServeHTTP(w, req)
		fmt.Print("\n\n")
		fmt.Println(w.Body)
		fmt.Print("\n\n")
		// Checking if the response was what we expected
		if w.Code == http.StatusOK {
			t.Logf("Expected to get status %d is same ast %d\n", http.StatusOK, w.Code)
		} else {
			t.Logf("Expected to get status %d but instead got %d\n", http.StatusOK, w.Code)
		}
	})

}
