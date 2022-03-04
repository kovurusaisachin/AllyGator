describe("Accomplishment dashboard", () => {

    beforeEach(() => {
        cy.visit("/dashboard")
    })

    it("should display a list of connections", () => {
        cy.get("ul")
          .should("contain", "500 points for drinking 8 cups of water for 7 straight days")
          .and("contain", "850 points for fasting for 5 days straight")
    })

    it("should display a list of rewards with mock", () => {
        cy.intercept("GET", "http://localhost:8080/api/v1/user", { fixture: "connectionList.json" })

        cy.get("ul")
        .should("contain", "500 points for drinking 8 cups of water for 7 straight days")
        .and("contain", "850 points for fasting for 5 days straight")
    })

})