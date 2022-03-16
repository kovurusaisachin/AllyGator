package api

import (
	"fmt"
	"log"

	"allygator.com/gatorweb/auth"
	"allygator.com/gatorweb/controller"
	"allygator.com/gatorweb/models"
	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

// LoginPayload login body
type LoginPayload struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

// LoginResponse token response
type LoginResponse struct {
	Token string `json:"token"`
}

// Login logs users in
func Login(c *gin.Context) {
	var payload LoginPayload
	var user controller.User
	fmt.Println(user.UFmail)

	err := c.ShouldBindJSON(&payload)
	if err != nil {
		c.JSON(400, gin.H{
			"msg": "invalid json",
		})
		c.Abort()
		return
	}

	result := models.DB.QueryRow("select email from users where email= ?", payload.Email)
	mailDB := ""
	result.Scan(&mailDB)
	if mailDB == "" {
		c.JSON(401, gin.H{
			"msg": "Invalid User credentials!! Please verify the entered Email",
		})
		c.Abort()
		return
	}
	dbUserPassword, err := GetUserDetails(mailDB)
	if err != nil {
		c.JSON(401, gin.H{
			"msg": "Could not retreive the Password from the DB",
		})
		c.Abort()
		return
	}
	err = CheckPassword(dbUserPassword, payload.Password)
	if err != nil {
		log.Println(err)
		c.JSON(401, gin.H{
			"msg": "Invalid User credentials!! Please verify the entered Password",
		})
		c.Abort()
		return
	}

	jwtWrapper := auth.JwtWrapper{
		SecretKey:       "verysecretkey",
		Issuer:          "AuthService",
		ExpirationHours: 24,
	}
	signedToken, err := jwtWrapper.GenerateToken(payload.Email)
	if err != nil {
		log.Println(err)
		c.JSON(500, gin.H{
			"msg": "error signing token",
		})
		c.Abort()
		return
	}

	tokenResponse := LoginResponse{
		Token: signedToken,
	}

	c.JSON(200, tokenResponse)

	return
}

// CheckPassword checks user password from the database with the User-entered password
func CheckPassword(userPassword, providedPassword string) error {
	err := bcrypt.CompareHashAndPassword([]byte(userPassword), []byte(providedPassword))
	if err != nil {
		return err
	}

	return nil
}

//This function gets the hashed password details from the database
func GetUserDetails(email string) (string, error) {
	var password string
	row := models.DB.QueryRow("SELECT password FROM users WHERE  email = ?", email)
	if row.Err() != nil {
		return "", row.Err()
	}

	row.Scan(&password)

	return password, nil
}
