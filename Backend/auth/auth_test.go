package auth

import (
	"os"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestGenerateToken(t *testing.T) {
	jwtWrapper := JwtWrapper{
		SecretKey:       "verysecretkey",
		Issuer:          "Allygator",
		ExpirationHours: 24,
	}

	generatedToken, err := jwtWrapper.GenerateToken("sachin@email.com")
	assert.NoError(t, err)

	os.Setenv("testToken", generatedToken)
}

func TestValidateToken(t *testing.T) {
	encodedToken := os.Getenv("testToken")

	jwtWrapper := JwtWrapper{
		SecretKey: "verysecretkey",
		Issuer:    "Allygator",
	}

	claims, err := jwtWrapper.ValidateToken(encodedToken)
	assert.NoError(t, err)

	assert.Equal(t, "sachin@email.com", claims.Email)
	assert.Equal(t, "Allygator", claims.Issuer)
}
