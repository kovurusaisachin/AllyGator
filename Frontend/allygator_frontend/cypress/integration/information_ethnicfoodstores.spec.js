describe('Login Tests', function () {
    it('Successful login', function () {
        
        cy.visit('http://localhost:3000/login')
        cy.get("[data-cy='login-email-input']")
        .type("maitreyi.srinivas@ufl.edu")
        cy.get("[data-cy='login-password-input']")
        .type("maitreyi")
        cy.contains("Login")
        .click()
        cy.contains("Login successfull")
        .click()
    })

    it('Testing Electricity page navigation',function(){
        cy.visit('http://localhost:3000/dashboard')
        cy.contains("Information").click();
        cy.location("pathname").should("eq", "/dashboard/miscellaneous");
        cy.contains("Ethnic Food Stores").click();
        cy.location("pathname").should("eq", "/dashboard/miscellaneous/ethnicfoodstores");
    }) 

    it('Testing Ethnic Food Stores',function(){
        cy.visit('http://localhost:3000/dashboard/miscellaneous/ethnicfoodstores')
        cy.contains("Ethnic Food Stores");
    }) 
    it('Testing Ethnic food stores information',function(){
        cy.visit('http://localhost:3000/dashboard/miscellaneous/ethnicfoodstores')
        cy.contains("ethnic food sections");
    }) 
    
    it('Successful logout', function () {
        cy.contains("Logout").click()
    })
})