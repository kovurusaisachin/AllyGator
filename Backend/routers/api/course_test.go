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

var existingCourse = []byte(`{
	"idCourse": 1000,
	"coursename": "SE",
	"idDepartment": 111,
	"idFaculty": 20
}`)

var uniqueCourse = []byte(`{
	"idCourse": 5001,
	"coursename": "Operating Systems",
	"idDepartment": 111,
	"idFaculty": 20
}`)

var empData = []byte(``)

//AddCourse API mock test
func TestAddCourse(t *testing.T) {
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
	v1.POST("addCourse", AddCourse)

	t.Run("Empty JSON Data", func(t *testing.T) {

		req, err := http.NewRequest(http.MethodPost, "/api/v1/addCourse", bytes.NewBuffer(empData))
		if err != nil {
			t.Fatalf("Couldn't create request: %v\n", err)
		}

		// Creating a response recorder so that we can inspect the response
		w := httptest.NewRecorder()

		// Performing the request
		fmt.Print("\nMock API for Add Course - Sending Empty Data\n")
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

	t.Run("Course ID Already exists", func(t *testing.T) {

		req, err := http.NewRequest(http.MethodPost, "/api/v1/addCourse", bytes.NewBuffer(existingCourse))
		if err != nil {
			t.Fatalf("Couldn't create request: %v\n", err)
		}

		// Creating a response recorder so that we can inspect the response
		w := httptest.NewRecorder()

		// Performing the request
		fmt.Print("\nMock API for Add Course - Sending the existing CourseID\n")
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

	t.Run("Unique Course ID", func(t *testing.T) {

		req, err := http.NewRequest(http.MethodPost, "/api/v1/addCourse", bytes.NewBuffer(uniqueCourse))
		if err != nil {
			t.Fatalf("Couldn't create request: %v\n", err)
		}

		// Creating a response recorder so that we can inspect the response
		w := httptest.NewRecorder()

		// Performing the request
		fmt.Print("\nMock API for Add Course - Sending the unique CourseID\n")
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

//getCourse API mock test
func TestGetCourses(t *testing.T) {
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
	v1.GET("course", GetCourses)

	t.Run("Wrong URL", func(t *testing.T) {
		req, err := http.NewRequest(http.MethodGet, "/api/v1/courses", nil)
		if err != nil {
			t.Fatalf("Couldn't create request: %v\n", err)
		}

		// Creating a response recorder so that we can inspect the response
		w := httptest.NewRecorder()

		// Performing the request
		fmt.Print("\nMock API for getCourses - Sending wrong URL\n")
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
		req, err := http.NewRequest(http.MethodGet, "/api/v1/course", nil)
		if err != nil {
			t.Fatalf("Couldn't create request: %v\n", err)
		}

		// Creating a response recorder so that we can inspect the response
		w := httptest.NewRecorder()

		// Performing the request
		fmt.Print("\nMock API for getCourses - Sending correct URL\n")
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
