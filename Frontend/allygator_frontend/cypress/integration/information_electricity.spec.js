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

    it('Testing Elcetricity Help',function(){
        cy.visit('http://localhost:3000/dashboard/miscellaneous/electricity')
        cy.contains("Electricity Help");
    }) 
    it('Testing GRU Office Details',function(){
        cy.visit('http://localhost:3000/dashboard/miscellaneous/electricity')
        cy.contains("GRU Office Details");
       

    }) 
    it('Testing GRU Downtown information',function(){
        cy.visit('http://localhost:3000/dashboard/miscellaneous/electricity')
        cy.contains("Downtown Office");
    }) 
    it('Testing Start Services information',function(){
        cy.visit('http://localhost:3000/dashboard/miscellaneous/electricity')
        cy.contains("Start Services");
    }) 
    it('Testing Tax Identification Number Information',function(){
        cy.visit('http://localhost:3000/dashboard/miscellaneous/electricity')
        cy.contains("If you do not have a SSN or Tax Identification Number, then you must go into the GRU office downtown to set up your account");
    }) 
    it('Successful logout', function () {
        
        cy.contains("Logout").click()
    })
})