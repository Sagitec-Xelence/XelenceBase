/// <reference types="cypress" />
import helper from '../../PageObjectModel/helper'

describe('DatabaseConnection', () => {
    const hp=new helper()  
    const uniqueSeed = Date.now().toString();
    it('Lookup -->Search', () => {
     
      cy.login()
      cy.wait(6000)
      cy.get('#actOpenDatabaseConnections > .neo-action-icon').click()
      cy.wait(6000)
      cy.get('#txtConnectionName').should('be.visible').clear()
      cy.get('#actSearch > .neo-action-icon').click({force:true})
      cy.wait(5000)
      cy.get('#CenterSplitter').scrollTo('top')
      cy.contains('Records met the search criteria').should('be.visible')
      cy.get('.neo-grid-check-row').check()
      cy.get('.neo-table-cell > #actOpen > .neo-action-icon').click()
     // cy.get('#wfmDatabaseConnectionsLookup > #GlobalMessageDiv').should('have.class','GlobalMessage')
    })

    it('Lookup -->Open', () => {
      cy.login()
      cy.wait(6000)
      cy.get('#actOpenDatabaseConnections > .neo-action-icon').click()
      cy.wait(6000)
      cy.get('#txtConnectionName').should('be.visible').clear()
      cy.get('#actSearch > .neo-action-icon').click({force:true})
      cy.wait(5000)
      cy.get('#CenterSplitter').scrollTo('top')
      cy.contains('Records met the search criteria').should('be.visible')
      cy.get('.neo-grid-check-row').check()
      cy.get('.neo-table-cell > #actOpen > .neo-action-icon').click()
    })

    it('Lookup -->Reset', () => {
      cy.login()
      cy.get('#actOpenDatabaseConnections > .neo-action-icon').click()
      cy.get('#actSearch').click()
      cy.wait(3000)
      cy.get('#actReset').click({force:true})
      cy.wait(5000)
      cy.get('#CenterSplitter').scrollTo('top')
      cy.contains('[All search criteria has been reset.]').should('be.visible')
     // cy.get('#actReset').click()
      //cy.wait(5000)
      //cy.contains('[All search criteria has been reset.]').should('be.visible')
    })
    
    // it('Assertion and test cases verification for Maintenance form', () => { 
    //   cy.login()
    //   cy.get('#actOpenDatabaseConnections > .neo-action-icon').click()
    //   cy.get('#actNew > .neo-action-icon').click({force:true})
    //  // cy.contains('[ Record displayed.  Please make changes and press SAVE. ]').should('be.visible')
    //   cy.wait(6000)
    //   cy.get('#FreezedControl_actSave > .neo-action-icon').click({force:true})
    //   cy.get('#tblMain > :nth-child(1) > :nth-child(n) > .neo-group-container > .validator-error')
    //   var random_string = hp.GetRandomString()
    //   cy.get('#txtConnectionName').should('be.visible').type('test'+uniqueSeed)
    //   cy.wait(3000)
    //   cy.get('#FreezedControl_actSave > .neo-action-icon').click({force:true})
    //   cy.get(':nth-child(2) > .neo-group-container > .validator-error')
    //   cy.get(':nth-child(2) > .neo-group-container > #txtConnectionType').should('be.visible').type('test'+random_string)
    //   cy.wait(3000)
    //   cy.get('#FreezedControl_actSave > .neo-action-icon').click({force:true})
    //   cy.get(':nth-child(3) > .neo-group-container > .validator-error')
    //   cy.get(':nth-child(3) > .neo-group-container > #txtConnectionString').should('be.visible').type('test'+random_string)
    //   cy.wait(3000)
    //   cy.get('#FreezedControl_actSave > .neo-action-icon').click({force:true})
    //   cy.get(':nth-child(4) > .neo-group-container > .validator-error')
    //   cy.get(':nth-child(4) > .neo-group-container > #txtDbfactotyProvider').should('be.visible').type('test'+random_string)
    //   cy.wait(3000)
    //   cy.get('#FreezedControl_actSave > .neo-action-icon').click({force:true})
    //   cy.wait(6000)
    //   cy.contains('[ All changes successfully saved. ]').should('be.visible')
    //   cy.wait(6000)
    //   cy.get('#FreezedControl_actRefresh > .neo-action-icon').click({force:true})
    //   cy.contains('[ All changes successfully cancelled. ]').should('be.visible')
    //   cy.wait(2000)
    //  // cy.get('.neo-action-breadcrumb-close').click()
    //  cy.BreadcrumeClose()
    // })

    // it('Assertion and test cases verification for Store Serch', () => {
    //   cy.login()
    //   cy.get('#actOpenDatabaseConnections > .neo-action-icon').click()
    //   cy.get('#txtConnectionName').should('be.visible').clear().type('test'+uniqueSeed)
    //   cy.get('#actMisc').click()
    //   cy.wait(5000)
    //   cy.get('#CenterSplitter').scrollTo('top')
    //   cy.contains('[ Default values saved successfully. ]').should('be.visible').scrollIntoView()  
    //   cy.get('#actSearch').click()
    //   cy.wait(5000)
    //   cy.get('#CenterSplitter').scrollTo('top')
    //   cy.contains('[ 1 Records met the search criteria. ]').should('be.visible') 
    //   cy.get('#actReset').click({force:true})
    //   cy.wait(5000)
    //   cy.get('#CenterSplitter').scrollTo('top')
    //   cy.contains('[All search criteria has been reset.]').should('be.visible')
    //   cy.get('#actMisc').click()
    //   cy.wait(5000)
    //   cy.get('#CenterSplitter').scrollTo('top')
    //   cy.get('#actSearch').click()
    //   cy.wait(5000)
    //   })


    it('Lookup -->Export to excel', () => {
      cy.login()
      cy.get('#actOpenDatabaseConnections > .neo-action-icon').click()
      cy.wait(2000)
      cy.get('#actSearch').click()
      cy.wait(5000)
      cy.get('#CenterSplitter').scrollTo('top')
      cy.get('#actExport > .neo-action-icon').click()
      cy.wait(5000)
      cy.get('#clickExcel > .neo-action-icon').click()
      cy.wait(5000)
      cy.get('#CenterSplitter').scrollTo('top')
      cy.contains('Records exported successfully to excel.').should('be.visible')
      // // cy.wait(5000)
      // // cy.get('.neo-table-cell > #actOpen > .neo-action-icon').click({force:true})
      // // cy.wait(5000)
      // // cy.contains('No record selected. Please select record(s) and try again.').should('be.visible')
      // // cy.wait(5000)
      // // cy.get('#actDelete > .neo-action-icon').click({force:true})
      // // cy.wait(5000)
      // // cy.contains('Please select record(s).').should('be.visible')
      // // cy.wait(5000)
      // // cy.get('#txtConnectionName').should('be.visible').clear().type('test'+uniqueSeed)
      // // cy.get('#actSearch').click()
      // // cy.wait(5000)
      // // cy.get('#actDelete > .neo-action-icon').click({force:true})
      // // cy.wait(5000)
      // // cy.get('#CenterSplitter').scrollTo('top')
      // // cy.contains('[ Selected record(s) have been deleted. ]').should('be.visible')
    
    })
    
  })
    