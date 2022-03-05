/// <reference types="cypress"/>

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
  
    it("Check if every component of analytics card is working or not",() => {
        //Check if header is present
        cy.get("h1").contains("Dashboard");
        cy.contains("Connections");
        cy.contains("Posts");
        cy.contains("Activities");
        cy.contains("Pending connections");

    });

    it("Check if table on dashboard is loaded or not",() => {
        //check connection table
        cy.contains("Connection's list");
        cy.get("thead").should("contain","Name").and("contain","Major").and("contain","Department").and("contain","Nationality").and("contain","Status");

        //check course list table
        cy.contains("Top Course list");
        cy.get("thead").should("contain","Name").and("contain","Course").and("contain","Department").and("contain","Faculty").and("contain","Likes");

    });
  
    
  });
  