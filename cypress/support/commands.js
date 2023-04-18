// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

// Written this method to capture Heart count of the any project

Cypress.Commands.add('searchProject', (projectName) => { cy.get("a > h1").each(($el, index, $list) => {

    if($el.text().includes(projectName))
    {
        cy.get('div > button').eq(index).as("heartButton")
        //cy.get('@heartButton').click()
        cy.get('@heartButton').then(($btn) => {
            const beforeValue = $btn.text()
            const beforeValueInt = parseInt(beforeValue)
            cy.log('Hearts before Count', beforeValueInt)
        cy.wait(5000)
        cy.get('@heartButton', { timeout: 10000 }).should('be.visible');
        cy.get('@heartButton').click()
        cy.wait(10000)
        cy.get('@heartButton', { timeout: 10000 }).should('be.visible');
    
        cy.get('@heartButton').then(($btn) => {
            const afterValue = $btn.text()
            const afterValueInt = parseInt(afterValue)
            cy.log('Hearts after Count', afterValueInt)
        
        cy.wait(5000)
        cy.get('@heartButton', { timeout: 10000 }).should('be.visible');
        if(afterValue.includes(beforeValueInt+1)){
            cy.log('pass',beforeValueInt+1)
            cy.contains("Pass, Incremented by 1").should('not.exist')
        }
        else{
            cy.log('fail',beforeValueInt+1)
            cy.contains("Something went wrong, Not incremented by 1").should('exist')
        }
        cy.wait(5000)
        cy.get('@heartButton', { timeout: 10000 }).should('be.visible');
        cy.get('@heartButton').click()
    })
    })
    }
}) })

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
