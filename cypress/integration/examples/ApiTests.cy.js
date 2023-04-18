describe('API Level Testing on Conduit app', function()
{
it('T001_Verify Learners GET API is responding with correct response code',function(){
    cy.request('GET',Cypress.env('apiUrl')+"/api/learners", {

    }).then(function(response){
        expect(response.status).to.eq(200)
    }) 
})
it('T002_Verify Learners GET API is responding with List of learners',function(){
    cy.request('GET',Cypress.env('apiUrl')+"/api/learners", {

    }).then(function(response){
        expect(response.status).to.eq(200)
        expect(response.body.learners[0]).to.have.property("name","Joy Reynolds DVM")
    }) 
})      
it('T003_Verify whether Learners POST API call responding with correct response code',function(){
    cy.request('POST',Cypress.env('apiUrl')+"/api/learners", { 
            "name": "John Doe"
    }).then(function(response){
        expect(response.status).to.eq(200) 
    }) 
})  
it('T004_Verify whether Learners POST API call responding with correct name',function(){
    cy.request('POST',Cypress.env('apiUrl')+"/api/learners", { 
            "name": "John Doe"
    }).then(function(response){
        expect(response.body).to.have.property("name","John Doe")
        expect(response.status).to.eq(200) 
    }) 
})     
})
