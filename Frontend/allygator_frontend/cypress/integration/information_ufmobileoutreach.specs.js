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

it('Testing UF Mobile Outreach Clinic page navigation',function(){
    cy.visit('http://localhost:3000/dashboard')
    cy.contains("Information").click();
    cy.location("pathname").should("eq", "/dashboard/miscellaneous");
    cy.contains("UF Mobile Outreach Clinic").click();
    cy.location("pathname").should("eq", "/dashboard/miscellaneous/ufmobileoutreachclinic");

}) 

it('Testing UF Mobile Outreach Clinic Information',function(){
    cy.visit('http://localhost:3000/dashboard/miscellaneous/ufmobileoutreachclinic')
    cy.contains("UF Mobile Outreach Clinic");
}) 
it('Testing UF Mobile Outreach Information',function(){
    cy.visit('http://localhost:3000/dashboard/miscellaneous/ufmobileoutreachclinic')
    cy.contains("The UF mobile outreach clinic is available at different locations throughout the week.");
}) 


it('Successful logout', function () {
    
    cy.contains("Logout").click()
})
