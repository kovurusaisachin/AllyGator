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
    cy.contains("Temporary Housing").click();
    cy.location("pathname").should("eq", "/dashboard/miscellaneous/temporaryhousing");

}) 

it('Testing Temporary Housing Information',function(){
    cy.visit('http://localhost:3000/dashboard/miscellaneous/temporaryhousing')
    cy.contains("Temporary Housing");
}) 
it('Testing AirBnb Information',function(){
    cy.visit('http://localhost:3000/dashboard/miscellaneous/temporaryhousing')
    cy.contains("Airbnb");
}) 
it('Testing Extended Staying Information',function(){
    cy.visit('http://localhost:3000/dashboard/miscellaneous/temporaryhousing')
    cy.contains("Extended stay");
}) 
it('Testing Southern Comfort Properties Information',function(){
    cy.visit('http://localhost:3000/dashboard/miscellaneous/temporaryhousing')
    cy.contains("Southern Comfort Properties");
})
it('Testing UF Guest Housing Information',function(){
    cy.visit('http://localhost:3000/dashboard/miscellaneous/temporaryhousing')
    cy.contains("UF Guest Housing");
}) 
it('Successful logout', function () {
    
    cy.contains("Logout").click()
})
