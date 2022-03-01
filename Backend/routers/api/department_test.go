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

var existingId = []byte(`{
		"idDepartment": 111,
		"deptName": "CSE"
	}`)

var uniqueId = []byte(`{
	"idDepartment": 117,
	"deptName": "Arts"
	}`)

//AddDepartment API mock test
func TestAddDepartment(t *testing.T) {
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
	v1.POST("addDept", AddDepartment)

	t.Run("Sending Empty Data", func(t *testing.T) {

		req, err := http.NewRequest(http.MethodPost, "/api/v1/addDept", bytes.NewBuffer(emptyData))
		if err != nil {
			t.Fatalf("Couldn't create request: %v\n", err)
		}

		// Creating a response recorder so that we can inspect the response
		w := httptest.NewRecorder()

		// Performing the request
		fmt.Print("\nMock API for Add Department -  Sending Empty Data\n")
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

	t.Run("Department ID Already exists", func(t *testing.T) {

		req, err := http.NewRequest(http.MethodPost, "/api/v1/addDept", bytes.NewBuffer(existingId))
		if err != nil {
			t.Fatalf("Couldn't create request: %v\n", err)
		}

		// Creating a response recorder so that we can inspect the response
		w := httptest.NewRecorder()

		// Performing the request
		fmt.Print("\nMock API for Add Department - Sending the existing DepartmentID\n")
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

	t.Run("Unique Department ID", func(t *testing.T) {

		req, err := http.NewRequest(http.MethodPost, "/api/v1/addDept", bytes.NewBuffer(uniqueId))
		if err != nil {
			t.Fatalf("Couldn't create request: %v\n", err)
		}

		// Creating a response recorder so that we can inspect the response
		w := httptest.NewRecorder()

		// Performing the request
		fmt.Print("\nMock API for Add Department - Sending the unique DepartmentID\n")
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
