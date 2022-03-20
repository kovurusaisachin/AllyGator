package api

import (
	"bytes"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"net/http/httptest"
	"testing"

	"allygator.com/gatorweb/models"
	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/assert"
)

//Login API Unit-test
func TestLogin(t *testing.T) {
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
	v1.POST("login", Login)

	t.Run("Invalid JSON Data", func(t *testing.T) {

		user := []byte(``)
		payload, err := json.Marshal(&user)
		assert.NoError(t, err)
		req, err := http.NewRequest(http.MethodPost, "/api/v1/login", bytes.NewBuffer(payload))
		if err != nil {
			t.Fatalf("Couldn't create request: %v\n", err)
		}

		// Creating a response recorder so that we can inspect the response
		w := httptest.NewRecorder()

		// Performing the request
		fmt.Print("\nMock API for User Login - Sending the InvalidJson\n")
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

	t.Run("Invalid EmailID", func(t *testing.T) {
		user := LoginPayload{
			Email:    "invalid@ufl.edu",
			Password: "qwertyu",
		}

		payload, err := json.Marshal(&user)
		assert.NoError(t, err)
		req, err := http.NewRequest(http.MethodPost, "/api/v1/login", bytes.NewBuffer(payload))
		if err != nil {
			t.Fatalf("Couldn't create request: %v\n", err)
		}

		// Creating a response recorder so that we can inspect the response
		w := httptest.NewRecorder()

		// Performing the request
		fmt.Print("\nMock API for User Login - Sending the Invalid EmailID\n")
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

	t.Run("Invalid Password", func(t *testing.T) {
		user := LoginPayload{
			Email:    "kovuru.saisachin@ufl.edu",
			Password: "wrongPassword",
		}

		payload, err := json.Marshal(&user)
		assert.NoError(t, err)
		req, err := http.NewRequest(http.MethodPost, "/api/v1/login", bytes.NewBuffer(payload))
		if err != nil {
			t.Fatalf("Couldn't create request: %v\n", err)
		}

		// Creating a response recorder so that we can inspect the response
		w := httptest.NewRecorder()

		// Performing the request
		fmt.Print("\nMock API for User Login - Sending the Invalid Password\n")
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

	t.Run("Valid Credentials", func(t *testing.T) {
		user := LoginPayload{
			Email:    "kovuru.saisachin@ufl.edu",
			Password: "qwertyu",
		}

		payload, err := json.Marshal(&user)
		assert.NoError(t, err)
		req, err := http.NewRequest(http.MethodPost, "/api/v1/login", bytes.NewBuffer(payload))
		if err != nil {
			t.Fatalf("Couldn't create request: %v\n", err)
		}

		// Creating a response recorder so that we can inspect the response
		w := httptest.NewRecorder()

		// Performing the request
		fmt.Print("\nMock API for User Login - Sending the Valid Credentials\n")
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
