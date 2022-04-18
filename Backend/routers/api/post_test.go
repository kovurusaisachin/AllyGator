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

var uniquePost = []byte(`{
    "idUser": 1,
    "description": "Summer 2022 courses availability in in Computer Science?",
    "title": "Are there any courses that are being offered by Computer Science for Summer semester?",
    "category": "doubt"
}`)

//AddPost API Unit-test
func TestAddPosts(t *testing.T) {
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
	v1.POST("addPost", AddPosts)

	t.Run("Empty JSON Data", func(t *testing.T) {

		req, err := http.NewRequest(http.MethodPost, "/api/v1/addPost", bytes.NewBuffer(emptyData))
		if err != nil {
			t.Fatalf("Couldn't create request: %v\n", err)
		}

		// Creating a response recorder so that we can inspect the response
		w := httptest.NewRecorder()

		// Performing the request
		fmt.Print("\nMock API for Add Post - Sending Empty Data\n")
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

	t.Run("Post", func(t *testing.T) {

		req, err := http.NewRequest(http.MethodPost, "/api/v1/addPost", bytes.NewBuffer(uniquePost))
		if err != nil {
			t.Fatalf("Couldn't create request: %v\n", err)
		}

		// Creating a response recorder so that we can inspect the response
		w := httptest.NewRecorder()

		// Performing the request
		fmt.Print("\nMock API for Add Post - Adding the Posts\n")
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

//getPosts API Unit-test
func TestGetPosts(t *testing.T) {
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
	v1.GET("post", GetPosts)

	t.Run("Wrong URL", func(t *testing.T) {
		req, err := http.NewRequest(http.MethodGet, "/api/v1/posts", nil)
		if err != nil {
			t.Fatalf("Couldn't create request: %v\n", err)
		}

		// Creating a response recorder so that we can inspect the response
		w := httptest.NewRecorder()

		// Performing the request
		fmt.Print("\nMock API for getPosts - Sending wrong URL\n")
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
		req, err := http.NewRequest(http.MethodGet, "/api/v1/post", nil)
		if err != nil {
			t.Fatalf("Couldn't create request: %v\n", err)
		}

		// Creating a response recorder so that we can inspect the response
		w := httptest.NewRecorder()

		// Performing the request
		fmt.Print("\nMock API for getPosts - Sending correct URL\n")
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

//GetPostsByUserId API Unit-test
func TestGetPostsByUserId(t *testing.T) {
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
	v1.GET("post/user/:id", GetPostsByUserId)

	t.Run("Incorrect UserID", func(t *testing.T) {
		req, err := http.NewRequest(http.MethodGet, "/api/v1/post/user/111", nil)
		if err != nil {
			t.Fatalf("Couldn't create request: %v\n", err)
		}

		// Creating a response recorder so that we can inspect the response
		w := httptest.NewRecorder()

		// Performing the request
		fmt.Print("\nMock API for getPostsByUserId - Sending the incorrect UserID\n")
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
	t.Run("Correct UserID", func(t *testing.T) {
		req, err := http.NewRequest(http.MethodGet, "/api/v1/post/user/1", nil)
		if err != nil {
			t.Fatalf("Couldn't create request: %v\n", err)
		}

		// Creating a response recorder so that we can inspect the response
		w := httptest.NewRecorder()

		// Performing the request
		fmt.Print("\nMock API for getPostsByUserId - Sending correct UserID\n")
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

//GetPostsByPostId API Unit-test
func TestGetPostsByPostId(t *testing.T) {
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
	v1.GET("post/post/:id", GetPostsByPostId)

	t.Run("Incorrect PostID", func(t *testing.T) {
		req, err := http.NewRequest(http.MethodGet, "/api/v1/post/post/111", nil)
		if err != nil {
			t.Fatalf("Couldn't create request: %v\n", err)
		}

		// Creating a response recorder so that we can inspect the response
		w := httptest.NewRecorder()

		// Performing the request
		fmt.Print("\nMock API for GetPostsByPostId - Sending the incorrect PostID\n")
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
	t.Run("Correct PostID", func(t *testing.T) {
		req, err := http.NewRequest(http.MethodGet, "/api/v1/post/post/1", nil)
		if err != nil {
			t.Fatalf("Couldn't create request: %v\n", err)
		}

		// Creating a response recorder so that we can inspect the response
		w := httptest.NewRecorder()

		// Performing the request
		fmt.Print("\nMock API for GetPostsByPostId - Sending correct PostID\n")
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
