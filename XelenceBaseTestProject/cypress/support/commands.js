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
// Cypress.Commands.add('login', (email, password) => { ... })
//
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
import 'cypress-wait-until'
Cypress.Commands.add('login',() => {
    {
        cy.visit('/')
        cy.visit('/Account/AutoLogin?username='+Cypress.config().UserId)
        cy.wait(5000)
        cy.contains('Development Studio').click()
        cy.wait(5000)
        cy.visit('/')
        cy.waitForSpinners()
        cy.get('#s3-root-div > div > header > .s3-logo').should('be.visible')
        cy.log('---Sucessfully Logged IN---')
        cy.get('.icon-tools').click();
        cy.contains('Xelence Base').click()
        cy.wait(5000)
        cy.get('iframe')
          .invoke('attr', 'src')
          .then(src => {  cy.visit(src) });
    }
   
})

Cypress.Commands.add('waitForSpinners', () => {
  cy.waitUntil(() => cy.get('#s3-root-div').then(ddisplay => ddisplay.css("display")!="none" )
  , {
  errorMsg: 'This is a custom error message', // overrides the default error message
  timeout: 600000, // waits up to 2000 ms, default to 5000
  interval: 3000 // performs the check every 500 ms, default to 200
  }
  );
  })

  Cypress.Commands.add('waitTillDisplayElement', (ele) => {
      cy.waitUntil(() => cy.get(ele).then(ddisplay => ddisplay.css("display")!="none" )
      , {
      errorMsg: 'This is a custom error message', // overrides the default error message
      timeout: 600000, // waits up to 2000 ms, default to 5000
      interval: 500 // performs the check every 500 ms, default to 200
      }
      );
      })

      Cypress.Commands.add('waitTillDisplayContent', (content) => {
          cy.waitUntil(() => cy.contains(content).then(ddisplay => ddisplay.css("display")!="none" )
          , {
          errorMsg: 'This is a custom error message', // overrides the default error message
          timeout: 600000, // waits up to 2000 ms, default to 5000
          interval: 500 // performs the check every 500 ms, default to 200
          }
          );
          })
          
Cypress.Commands.add('logoff',() => {
    {
      cy.get('#btnWelComeDivCollapseExpand').click()
        cy.get('#lnkLogoff').click()   
        cy.wait(5000)
       // cy.title().should('eq','Login')
    }
  })

    Cypress.Commands.add('BreadcrumeClose',() => {
      {
        cy.get('.neo-action-breadcrumb-close').click()
          
         // cy.title().should('eq','Login')
      }
    })


