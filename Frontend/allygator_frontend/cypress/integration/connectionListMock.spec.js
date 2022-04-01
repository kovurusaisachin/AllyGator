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

context("Connections Page", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/dashboard");
    });
  
    it("Checks if connection page and its navigation is working", () => {
      //connections page
      cy.contains("Connections").click();
      cy.location("pathname").should("eq", "/dashboard/connection");
    });
    
    it("should display a list of connections", () => {
      cy.get("td")
        .should("contain", "Prashant Kapri")
        .and("contain", "kapri.prashant@ufl.edu")
      cy.get("td")
        .should("contain", "Noopur Thanvi")
        .and("contain", "thanvi.noopur@ufl.edu")
      cy.get("td")
        .should("contain", "Maitreyi Srinivasan")
        .and("contain", "maitreyi.srinivas@ufl.edu")
    })

    it("should display a list of connections with mock", () => {
      cy.intercept("GET", "http://localhost:8080/api/v1/user")

      cy.get("td")
        .should("contain", "Prashant Kapri")
        .and("contain", "kapri.prashant@ufl.edu")
      cy.get("td")
        .should("contain", "Noopur Thanvi")
        .and("contain", "thanvi.noopur@ufl.edu")
      cy.get("td")
        .should("contain", "Maitreyi Srinivasan")
        .and("contain", "maitreyi.srinivas@ufl.edu")
    })
   
  });
    describe('Logout Tests', function () {
      it('Successful logout', function () {
      cy.contains("Logout").click()
    })
})

  