// /// <reference types="cypress" />
// describe('Assertion and Scenario verification in Lookup', () => {
// it('Assertion and test cases verification in lookup for search,Reset,export to excel and store state', () => {
//     cy.login()
//     cy.get('#tblCriteria > :nth-child(n) > :nth-child(n) > .neo-group-container > .validator-error').should('be.visible')
//     cy.get('#txtdescription').type("CodeMaintenance screen")
//     cy.get('#btnSearch > .neo-action-icon').click()
//     cy.wait(3000)
//     cy.get('#wfmCodeLookup > #GlobalMessageDiv',{timeout:6000}).should('have.class','GlobalMessage')
//     cy.get('.GridLinks').click()
//     cy.get('#btnPreviousPage > .neo-action-icon').click()
//       cy.wait(3000)
//       cy.get('#btnReset > .neo-action-icon').click()
//       cy.get('#wfmCodeLookup > #GlobalMessageDiv',{timeout:6000}).should('have.class','GlobalMessage')
//       cy.get('#txtdescription').type("CodeMaintenance screen")
//       cy.get('#btnSearch > .neo-action-icon',{timeout:6000}).click()
//       cy.wait(3000)
//       cy.get('#btnReset > .neo-action-icon').click()
//       cy.get('#wfmCodeLookup > #GlobalMessageDiv',{timeout:6000}).should('have.class','GlobalMessage')
//       cy.get('#txtdescription').type("CodeMaintenance screen")
//       cy.get('#btnStoreDefaults > .neo-action-icon').click()
//       cy.wait(3000)
//       cy.get('#wfmCodeLookup > #GlobalMessageDiv',{timeout:6000}).should('have.class','GlobalMessage')
//       cy.get('#btnReset > .neo-action-icon').click()
//       cy.wait(3000)
//       cy.get('#btnStoreDefaults > .neo-action-icon').click()
//       cy.get('#txtdescription').type("CodeMaintenance screen")
//       cy.get('#btnSearch > .neo-action-icon').click()
//       cy.wait(3000)
//      // cy.get('#btnExportToExcelClick > .neo-action-icon').click()
//       //cy.wait(3000)
//       //cy.get('#clickExcel > .neo-action-icon').click()
//       //cy.wait(5000)
//       //cy.get('#btnReset > .neo-action-icon').click()
//       //cy.get('#btnWelComeDivCollapseExpand').click()
//       //cy.get('#lnkLogoff').click()   
//       //cy.wait(5000)
//       cy.logoff()
      
      
//     }) 
// })