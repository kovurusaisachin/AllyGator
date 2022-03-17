package middlewares

import (
	"fmt"
	"net/http"
	"net/http/httptest"
	"testing"

	"allygator.com/gatorweb/auth"
	"allygator.com/gatorweb/models"
	"allygator.com/gatorweb/routers/api"
	"github.com/gin-gonic/gin"
	_ "github.com/mattn/go-sqlite3"
	"github.com/stretchr/testify/assert"
)

//Test-case 1 - No Authorization header provided
func TestAuthzNoHeader(t *testing.T) {
	// Switching to test mode so we don't get such noisy output
	gin.SetMode(gin.TestMode)
	router := gin.Default()
	router.Use(Authz())
	router.GET("/api/v1/users", api.GetUsers)

	w := httptest.NewRecorder()
	req, _ := http.NewRequest("GET", "/api/v1/users", nil)
	fmt.Printf("\n")
	router.ServeHTTP(w, req)
	// Checking if the response was what we expected
	if w.Code == http.StatusOK {
		t.Logf("\nExpected to get status %d is same ast %d\n", http.StatusOK, w.Code)
	} else {
		t.Logf("\nExpected to get status %d but instead got %d\n", http.StatusOK, w.Code)
	}
	assert.Equal(t, 403, w.Code)
}

//Test-case 2 - Incorrect Format of Authorization Token
func TestAuthzInvalidTokenFormat(t *testing.T) {
	// Switching to test mode so we don't get such noisy output
	gin.SetMode(gin.TestMode)
	router := gin.Default()
	router.Use(Authz())
	router.GET("/api/v1/users", api.GetUsers)

	w := httptest.NewRecorder()
	req, _ := http.NewRequest("GET", "/api/v1/users", nil)
	fmt.Printf("\n")
	req.Header.Add("Authorization", "test")
	router.ServeHTTP(w, req)
	// Checking if the response was what we expected
	if w.Code == http.StatusOK {
		t.Logf("\nExpected to get status %d is same ast %d\n", http.StatusOK, w.Code)
	} else {
		t.Logf("\nExpected to get status %d but instead got %d\n", http.StatusOK, w.Code)
	}
	assert.Equal(t, 400, w.Code)
}

//Test-case 3 - Invalid Token
func TestAuthzInvalidToken(t *testing.T) {
	invalidToken := "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
	// Switching to test mode so we don't get such noisy output
	gin.SetMode(gin.TestMode)
	router := gin.Default()
	router.Use(Authz())

	router.GET("/api/v1/users", api.GetUsers)

	w := httptest.NewRecorder()
	req, _ := http.NewRequest("GET", "/api/v1/users", nil)
	fmt.Printf("\n")
	req.Header.Add("Authorization", invalidToken)
	router.ServeHTTP(w, req)
	// Checking if the response was what we expected
	if w.Code == http.StatusOK {
		t.Logf("\nExpected to get status %d is same ast %d\n", http.StatusOK, w.Code)
	} else {
		t.Logf("\nExpected to get status %d but instead got %d\n", http.StatusOK, w.Code)
	}
	assert.Equal(t, 401, w.Code)
}

//Test-case 4 - Valid Token
func TestValidToken(t *testing.T) {
	err := models.ConnectDatabase()
	assert.NoError(t, err)

	user := api.LoginPayload{
		Email:    "kovuru.saisachin@ufl.edu",
		Password: "qwertyu",
	}

	jwtWrapper := auth.JwtWrapper{
		SecretKey:       "verysecretkey",
		Issuer:          "AuthService",
		ExpirationHours: 24,
	}

	token, err := jwtWrapper.GenerateToken(user.Email)
	assert.NoError(t, err)
	// Switching to test mode so we don't get such noisy output
	gin.SetMode(gin.TestMode)
	router := gin.Default()
	router.Use(Authz())

	router.GET("/api/v1/users", api.GetUsers)

	w := httptest.NewRecorder()
	req, _ := http.NewRequest("GET", "/api/v1/users", nil)
	fmt.Printf("\n")
	req.Header.Add("Authorization", fmt.Sprintf("Bearer %s", token))
	// Checking if the response was what we expected
	if w.Code == http.StatusOK {
		t.Logf("\nExpected to get status %d is same ast %d\n", http.StatusOK, w.Code)
	} else {
		t.Logf("\nExpected to get status %d but instead got %d\n", http.StatusOK, w.Code)
	}
	assert.Equal(t, 200, w.Code)
	router.ServeHTTP(w, req)

}
