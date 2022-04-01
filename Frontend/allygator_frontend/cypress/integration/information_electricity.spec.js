/// <reference types="cypress"/>

describe('Login Tests', function () {
    it('Successful login', function () {
        
        cy.visit('http://localhost:3000/login')

        cy.get("[data-cy='login-email-input']")
        .type("kovuru.saisachin@ufl.edu")
        cy.get("[data-cy='login-password-input']")
        .type("sachin")
        cy.contains("Login")
        .click()
        cy.contains("Login successfull")
        .click()
    })

    it('Testing Electricity page navigation',function(){
        cy.visit('http://localhost:3000/dashboard')

        cy.contains("Information").click();
        cy.location("pathname").should("eq", "/dashboard/miscellaneous");
        
        cy.contains("Electricity").click();
        cy.location("pathname").should("eq", "/dashboard/miscellaneous/electricity");

    }) 
    it('Successful logout', function () {
        
        cy.contains("Logout").click()
    })
})
   
    

    

    
