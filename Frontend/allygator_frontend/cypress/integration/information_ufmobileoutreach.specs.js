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
it('Testing Tuesday Information',function(){
    cy.visit('http://localhost:3000/dashboard/miscellaneous/ufmobileoutreachclinic')
    cy.contains("912 NE 16th Ave");
}) 
it('Testing Wednesday Information',function(){
    cy.visit('http://localhost:3000/dashboard/miscellaneous/ufmobileoutreachclinic')
    cy.contains("5453 401 E University Ave.");
}) 
it('Testing Thursday Information',function(){
    cy.visit('http://localhost:3000/dashboard/miscellaneous/ufmobileoutreachclinic')
    cy.contains("1717 SE 15th St.");
}) 
it('Testing Friday Information',function(){
    cy.visit('http://localhost:3000/dashboard/miscellaneous/ufmobileoutreachclinic')
    cy.contains("3055 NE 28th Ave.");
}) 

it('Testing Location and Hours Information',function(){
    cy.visit('http://localhost:3000/dashboard/miscellaneous/ufmobileoutreachclinic')
    cy.contains("Location, hours and available specialists may vary each month.");
}) 
it('Testing Other health and medical services phone numbers Information',function(){
    cy.visit('http://localhost:3000/dashboard/miscellaneous/ufmobileoutreachclinic')
    cy.contains("Other health and medical services phone numbers");
}) 
it('Testing Other health and outreach clinic Information',function(){
    cy.visit('http://localhost:3000/dashboard/miscellaneous/ufmobileoutreachclinic')
    cy.contains("For more information about the Mobile Outreach Clinic or any of its partner organizations, call 352-273-5329 or visit outreach.med.ufl.edu");
}) 
it('Testing Services Information',function(){
    cy.visit('http://localhost:3000/dashboard/miscellaneous/ufmobileoutreachclinic')
    cy.contains("Service include");
}) 
it('Testing Service Cost Information',function(){
    cy.visit('http://localhost:3000/dashboard/miscellaneous/ufmobileoutreachclinic')
    cy.contains("All services are provided free of cost");
}) 

it('Successful logout', function () {
    
    cy.contains("Logout").click()
})
