describe("Accomplishment dashboard", () => {

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
    })

    it("should display a list of connections with mock", () => {
        cy.intercept("GET", "http://localhost:8080/api/v1/user", { fixture: "connectionList.json" })

        cy.get("td")
          .should("contain", "Prashant Kapri")
          .and("contain", "kapri.prashant@ufl.edu")
        cy.get("td")
          .should("contain", "Noopur Thanvi")
          .and("contain", "thanvi.noopur@ufl.edu")
    })

})