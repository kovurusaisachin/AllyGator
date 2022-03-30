/// <reference types="cypress"/>
describe('Login Tests', function () {
    
  it('Successful login', function () {
      cy.visit('http://localhost:3000/login')
      cy.get("[data-cy='login-email-input']")
      .type("kovuru.saisachin@ufl.edu")
      cy.get("[data-cy='login-password-input']")
      .type("sachin")
      cy.contains("Login").click()
      cy.contains("Login successfull").click()
  })
})
context("Dashboard Page", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/dashboard");
    });
  
    it("Checks if every component on sidebar is loaded and its navigation is working", () => {
      //Check if header is present
      cy.get("button").contains("AllyGators");
  
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
 
  });
  describe('Logout Tests', function () {
    it('Successful logout', function () {
        cy.contains("Logout").click()
    })
})

  