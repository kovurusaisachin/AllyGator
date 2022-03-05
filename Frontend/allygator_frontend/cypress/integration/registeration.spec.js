/// <reference types="cypress"/>

describe('Registeration Tests', function () {
    it('Successfull Register', function () {
        
        cy.request('POST', 'localhost:8080/api/v1/register/', {
            firstname: "Noopur S",
            lastname: "Thanvi",
            department: 111,
            password: "jjbsj@23#",
            email: "thanvi.noopur22@ufl.edu",
            gender: "female",
            course: "Database systems implementation",
            url: "https://www.linkedin.com/in/noopurthanvi0208/",
            nationality: "Indian",
            profile: "Human Expert",
            specialization: "UX Researcher",
            status: "active"
        })

        cy.visit('http://localhost:3000/signup')

        cy.get("[data-cy='reg-firstname-input']")
        .type('Noopur S')
        cy.get("[data-cy='reg-lastname-input']")
        .type('Thanvi')
        cy.get("[data-cy='reg-email-input']")
        .type('thanvi.noopur22@ufl.edu')
        cy.get("[data-cy='reg-password-input']")
        .type('jjbsj@23#')
        cy.get("[data-cy='reg-major-input']")
        .type('UX Researcher')
        cy.get("[data-cy='reg-nationality-input']")
        .type('Indian')
        cy.get("[data-cy='reg-gender-input']")
        .type('female')     
        cy.get("[data-cy='reg-phoneno-input']")
        .type('929292929')
        
        cy.contains("Sign Up")
        .click()

        cy.url()
        .should('contain', 'http://localhost:3000/login')
        cy.get("[data-cy='login-email-input']")
        .type('thanvi.noopur22@ufl.edu')
        cy.get("[data-cy='login-password-input']")
        .type('jjbsj@23#')
        cy.get("button").contains("Login");
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
      cy.contains("Miscellaneous").click();
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