/// <reference types="cypress"/>

describe('Login Tests', function () {
    it('Successfull login', function () {
        
        cy.request('POST', 'http://localhost:8080/api/v1/login', {
        user: {
            email: 'thanvi.noopur@ufl.edu',
            password: 'test'
        }
        })

        cy.visit('http://localhost:3000/login')

        cy.get("[data-cy='login-email-input']")
        .type('thanvi.noopur@ufl.edu')
        cy.get("[data-cy='login-password-input']")
        .type('test')
        cy.contains("Login")
        .click()

        cy.url()
        .should('contain', 'http://localhost:3000/dashboard')
        cy.get("button").contains("AllyGators");
        cy.get("h1").contains("Dashboard");
        
  
      // forum page
      cy.contains("Forum").click();
      cy.location("pathname").should("eq", "/dashboard/forum");
      cy.go("back");

      //connections page
      cy.contains("Connections").click();
      cy.location("pathname").should("eq", "/dashboard/connection");
      cy.go("back");
      
      //chat page
      cy.contains("Chat").click();
      cy.location("pathname").should("eq", "/dashboard/chat");
      cy.go("back");

      //miscellaneous page
      cy.contains("Information").click();
      cy.location("pathname").should("eq", "/dashboard/miscellaneous");
      cy.go("back");

      //profile page
      cy.contains("Profile").click();
      cy.location("pathname").should("eq", "/dashboard/profile");
      cy.go("back");

    });

    

    

    it('Empty fields', function () {
        cy.visit('http://localhost:3000/login')

        cy.contains('Login')
        .click()

        cy.url()
        .should('contain', 'http://localhost:3000/login')
        cy.get('.error-messages')
        .should('have.text', 'Please fill out the field')
    })
})