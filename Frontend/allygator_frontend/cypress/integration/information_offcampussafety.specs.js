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

    it('Testing Off campus safety page navigation',function(){
        cy.visit('http://localhost:3000/dashboard')

        cy.contains("Information").click();
        cy.location("pathname").should("eq", "/dashboard/miscellaneous");
        
        cy.contains("Off-Campus Safety").click();
        cy.location("pathname").should("eq", "/dashboard/miscellaneous/offcampussafety");

    }) 

    it('Testing Off Campus Safety Information',function(){
        cy.visit('http://localhost:3000/dashboard/miscellaneous/offcampussafety')
        cy.contains("Off campus safety");
    }) 
    it('Testing Off Campus Safety Content',function(){
        cy.visit('http://localhost:3000/dashboard/miscellaneous/offcampussafety')
        cy.contains("Off campus safety from the dean of students office");
    }) 
    it('Testing Personal Safety Tips Information',function(){
        cy.visit('http://localhost:3000/dashboard/miscellaneous/offcampussafety')
        cy.contains("Personal safety tips");
    }) 
    it('Testing Protecting Your Property Information',function(){
        cy.visit('http://localhost:3000/dashboard/miscellaneous/offcampussafety')
        cy.contains("Protecting your property");
    }) 
    it('Successful logout', function () {
        
        cy.contains("Logout").click()
    })
})