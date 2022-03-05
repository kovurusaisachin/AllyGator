/// <reference types="cypress"/>

context("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Checks if every component is loaded", () => {
    //Check if header is present
    cy.get("header").contains("Connect with Gators");

    //Check if Navbar has SignIn and SignUp
    cy.contains("Sign Up").click();
    cy.location("pathname").should("eq", "/signup");
    cy.go("back");

    // about page
    cy.contains("Log In").click();
    cy.location("pathname").should("eq", "/login");
    cy.go("back");
  });

  it("use requests to navigation bar links", () => {
    const pages = ["Home", "Features", "Register", "Team"];
    pages.forEach((page) => {
      cy.contains(page).then((link) => {
        cy.request(link.prop("href"));
      });
    });
  });

  it("see if team page properly", () => {
    //check if team members are there or not
    cy.contains("Prashant Kapri")
    cy.contains("Noopur Thanvi")
    cy.contains("Sai Sachin Kovuru")
    cy.contains("Maitreyi Srinivasan")

  })
});
