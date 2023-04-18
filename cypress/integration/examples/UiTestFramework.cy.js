/// <reference types="Cypress" />
import HomePage from '../../support/pageObjects/HomePage'
import LoginPage from '../../support/pageObjects/LoginPage'
//Used Mocha testing framework

//describe is a test suite
describe('UI Level Testing on Conduit app', function()
{
    beforeEach(function()
    {
        cy.fixture('example').then(function(data)
        {
           this.data=data 
        })
    })

//Tests is under it block
it('T001_Verify whether user able to login to the page',function(){
 const loginPage = new LoginPage()
    cy.visit(Cypress.env('url'))
    loginPage.getUserName().type(this.data.uname)
    loginPage.getPassword().type(this.data.password)
    loginPage.getButtonClick().click()
})
it('T002_Verify whether user able swith to 17th Tab',function(){
    const homePage = new HomePage()
    homePage.getGlobalFeeds().click()
    homePage.get17thTab().click()
})
it('T003_Verify whether Heart count is increase by 1 when user give 1 click',function(){
    // Created a reusable method in Support/Command.js 
    cy.searchProject(this.data.findProject)
})
})
