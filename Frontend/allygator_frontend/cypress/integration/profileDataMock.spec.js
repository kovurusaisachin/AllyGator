/// <reference types="cypress"/>

describe("Profile dashboard", () => {

    beforeEach(() => {
        cy.visit("/dashboard/profile")
    })
    it("should display profile data", () => {
    cy.contains("Profile Board")
        cy.get("dd")
          .should("contain", "Noopur Thanvi")
          .and("contain", "thanvi.noopur@ufl.edu")
    });

    it("should display profile data mock", () => {
        cy.intercept("GET", "http://localhost:8080/api/v1/user/4")
        cy.get("dd")
          .should("contain", "Noopur Thanvi")
          .and("contain", "thanvi.noopur@ufl.edu")
    });

})