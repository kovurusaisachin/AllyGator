/// <reference types="cypress"/>

describe("Connection dashboard", () => {

    beforeEach(() => {
        cy.visit("/dashboard")
    })

    it("should display a list of connections", () => {
        cy.get("td")
          .should("contain", "Prashant Kapri")
          .and("contain", "kapri.prashant@ufl.edu")
        cy.get("td")
          .should("contain", "Noopur Thanvi")
          .and("contain", "thanvi.noopur@ufl.edu")
        cy.get("td")
          .should("contain", "SaiSachin Kovuru")
          .and("contain", "kovuru.saisachin@ufl.edu")
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
    })

})