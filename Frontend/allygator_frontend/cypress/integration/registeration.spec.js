/// <reference types="cypress"/>

describe('Registeration Tests', function () {
    it('Successfull Register', function () {
        
        

        cy.visit('http://localhost:3000/signup')

        cy.get("[data-cy='reg-firstname-input']")
        .type('Noopur S')
        cy.get("[data-cy='reg-lastname-input']")
        .type('Thanvi')
        cy.get("[data-cy='reg-email-input']")
        .type('thanvi.noopur22@ufl.edu')
        cy.get("[data-cy='reg-password-input']")
        .type('jjbsj@23#')
        cy.get("[data-cy='reg-cnfpassword-input']")
        .type('jjbsj@23#')
        cy.get("[data-cy='reg-major-input']")
        .type('UX Researcher')
        cy.get("[data-cy='reg-department-input']")
        .type('CSE')
        cy.get("[data-cy='reg-nationality-input']")
        .type('India')
        cy.get("[data-cy='reg-gender-input']")
        .type('female')     
        cy.get("[data-cy='reg-status-input']")
        .type('active')
        
        cy.contains("Sign-Up")
        .click()

        cy.contains("Registeration successfull")
        .click()

    });

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
        
          it("Check if every component of analytics card is working or not",() => {
              //Check if header is present
              cy.get("h1").contains("Dashboard");
              cy.contains("Connections");
              cy.contains("Posts");
              cy.contains("Activities");
              cy.contains("Course list");
          });
      
          it("Check if table on dashboard is loaded or not",() => {
            //check connection table
             cy.contains("Connection's list");
             cy.get("thead").should("contain","Name").and("contain","Specialization").and("contain","Courses").and("contain","Nationality").and("contain","Status").and("contain","Linkedin");
      
            //check course list table
             cy.contains("Course list");
             cy.get("thead").should("contain","Course").and("contain","Faculty");
              
            //check Faculty list
             cy.contains("Faculty list");
             cy.get("thead").should("contain","Faculty").and("contain","RMP Link");       
          });  
        });
        describe('Logout Tests', function () {
          it('Successful logout', function () {
              cy.contains("Logout").click()
          })
      })
})