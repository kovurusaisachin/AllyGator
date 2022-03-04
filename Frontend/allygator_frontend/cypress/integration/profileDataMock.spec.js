describe("Accomplishment dashboard", () => {

    beforeEach(() => {
        cy.visit("/profile")
    })

    it("should display the record for the user", () => {
        cy.get("ul")
          .should("contain", "500 points for drinking 8 cups of water for 7 straight days")
          .and("contain", "850 points for fasting for 5 days straight")
    })

    it("should display a list of user with mock", () => {
        cy.intercept("GET", "http://localhost:8080/api/v1/user/1", { fixture: "profile.json" })

        cy.get("ul")
        .should("contain", "500 points for drinking 8 cups of water for 7 straight days")
        .and("contain", "850 points for fasting for 5 days straight")
    })

})