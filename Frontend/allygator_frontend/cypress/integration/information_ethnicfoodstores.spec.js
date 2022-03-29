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
    it('Testing Asian food market information',function(){
        cy.visit('http://localhost:3000/dashboard/miscellaneous/ethnicfoodstores')
        cy.contains("Asian Food Market/Oriental Food & Gift Market");
    }) 
    it('Testing Eastern Market information',function(){
        cy.visit('http://localhost:3000/dashboard/miscellaneous/ethnicfoodstores')
        cy.contains("Eastern Market");
    }) 
    it('Testing Chun Ching Market Information',function(){
        cy.visit('http://localhost:3000/dashboard/miscellaneous/ethnicfoodstores')
        cy.contains("Chun Ching Market");
    }) 
    it('Testing Falafel King Sandwiches Information',function(){
        cy.visit('http://localhost:3000/dashboard/miscellaneous/ethnicfoodstores')
        cy.contains("Falafel King Sandwiches");
    }) 
    it('Testing Gainesville Russian Food Information',function(){
        cy.visit('http://localhost:3000/dashboard/miscellaneous/ethnicfoodstores')
        cy.contains("Gainesville Russian Food");
    }) 
    it('Testing India Bazaar Information',function(){
        cy.visit('http://localhost:3000/dashboard/miscellaneous/ethnicfoodstores')
        cy.contains("India Bazaar");
    }) 
    it('Testing India Spice Information',function(){
        cy.visit('http://localhost:3000/dashboard/miscellaneous/ethnicfoodstores')
        cy.contains("India Spice");
    }) 
    it('Testing La Aurora Latin market Information',function(){
        cy.visit('http://localhost:3000/dashboard/miscellaneous/ethnicfoodstores')
        cy.contains("La Aurora Latin Market");
    }) 
    it('Testing Philippine Express Information',function(){
        cy.visit('http://localhost:3000/dashboard/miscellaneous/ethnicfoodstores')
        cy.contains("Philippine Express");
    }) 
    it('Testing Zeezeenia Kitchen and Market Information',function(){
        cy.visit('http://localhost:3000/dashboard/miscellaneous/ethnicfoodstores')
        cy.contains("Zeezeenia Kitchen and Market");
    }) 
    
    it('Successful logout', function () {
        cy.contains("Logout").click()
    })
})