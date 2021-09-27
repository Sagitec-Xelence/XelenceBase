/// <reference types="cypress" />
import helper from '../../PageObjectModel/helper'
describe('System Path', () => {
  const uniqueSeed = Date.now().toString();
 const hp=new helper() 
it('Maintenance -->Save', () => {
cy.login()
cy.get('#actOpenSystemPaths').click()
cy.get('#actNew').click()
cy.contains('[ Record displayed. Please make changes and press SAVE. ]').should('be.visible')
var random_string = hp.GetRandomString()
cy.get('#txtPathCode').should('be.visible').type('test'+random_string)
//cy.get('#txtPathCode').type(uniqueSeed)
var random_string = hp.GetRandomString()
cy.get('#txtPath').should('be.visible').type('test'+uniqueSeed)
cy.get('#txtPath1').should('be.visible').type('test'+uniqueSeed)
cy.get('#FreezedControl_actSave').click({force:true})
cy.wait(5000)
cy.contains('[ All changes successfully saved. ]').should('be.visible').should('have.text'," [ All changes successfully saved. ]")
//cy.get('[id^=wfmMessagesMaintenance]').find('#GlobalMessageDiv').should('have.text'," [ All changes successfully saved. ]")
cy.get('#FreezedControl_actSave').click({force:true})
cy.wait(2000)
cy.contains('No changes to save.').should('be.visible')
//cy.get('[id^=wfmMessagesMaintenance]').find('#GlobalMessageDiv').should('have.text',"No changes to save.")
cy.get('#FreezedControl_actRefresh').click({force:true})
 cy.wait(5000)
 cy.contains(' [ All changes successfully cancelled. ]').should('be.visible')
// cy.get('[id^=wfmMessagesMaintenance]').find('#GlobalMessageDiv').should('have.text'," [ All changes successfully cancelled. ]")
})

it('Lookup -->Search,open', () => {
    cy.login()
    cy.get('#actOpenSystemPaths').click()
    //var random_string = hp.GetRandomString()

  cy.get('#txtPathDescription').type('test'+uniqueSeed)
  cy.get('#actSearch').click()
  cy.wait(3000)
  cy.contains(' [ 1 Records met the search criteria. ]').should('be.visible')
  //cy.get('[id^=wfmMessagesLookup]').find('#GlobalMessageDiv').should('have.text'," [ 1 Records met the search criteria. ]")
  cy.wait(3000)
  cy.get('.neo-grid-check-row').check()
  cy.get('.neo-table-cell > #actOpen > .neo-action-icon').click()
})

it('Lookup -->reset', () => {
    cy.login()
    cy.get('#actOpenSystemPaths').click()
    cy.get('#txtPathDescription').type('test'+uniqueSeed)
  cy.get('#actSearch').click()
  cy.wait(3000)
  cy.get('#actReset').click({force:true})
  cy.wait(5000)
  cy.contains('[All search criteria has been reset.]').should('be.visible')
  //cy.get('[id^=wfmMessagesLookup]').find('#GlobalMessageDiv').should('have.text'," [All search criteria has been reset.]")
  cy.get('#actOpen').click()
 
  cy.get('#CenterSplitter').scrollTo('top')
  cy.wait(5000)
  cy.contains('No record selected. Please select record(s) and try again.').should('be.visible')
 // cy.wait(5000)
 // cy.get('[id^=wfmMessagesLookup]').find('#div#GlobalMessageDiv').should('have.text'," No record selected. Please select record(s) and try again.")
  cy.get('#actDelete').click()
 
  cy.get('#CenterSplitter').scrollTo('top')
  cy.wait(5000)
 cy.contains('Please select record(s).').should('be.visible')
 // cy.wait(5000)
 // cy.get('[id^=wfmMessagesLookup]').find('#GlobalMessageDiv').should('have.text'," Please select record(s).")
  //cy.get('#actExport').click()
  //cy.on('window:alert',(str) =>
  //{
    //  expect(str).to.equal('No record(s) present in grid to export.')
 // }
  //cy.wait(3000)
 // cy.get('[id^=wfmMessagesLookup]').find('#errorDialogWindow').should('have.text'," No record(s) present in grid to export.")
  
  //cy.get('[id^=wfmMessagesLookup]').find('#GlobalMessageDiv').should('have.text'," [ 1 Records met the search criteria. ]")
  //cy.wait(3000)
  //cy.get('.neo-grid-check-row').check()
  //cy.get('.neo-table-cell > #actOpen > .neo-action-icon').click()
})

  it('Lookup -->delete,export', () => {
  cy.login()
  cy.get('#actOpenSystemPaths').click()
  cy.get('#txtPathDescription').type('test'+uniqueSeed)
  cy.get('#actSearch').click()
  cy.wait(5000)
  cy.get('#actExport > .neo-action-icon').click()
  cy.wait(5000)
  cy.get('#clickExcel > .neo-action-icon').click()
  //cy.wait(7000)
  cy.contains('Records exported successfully to excel.').should('be.visible')
  //cy.get('[id^=wfmMessagesLookup]').find('#GlobalMessageDiv').should('have.text'," [Records exported successfully to excel.]")

 cy.wait(3000)
  cy.get('.neo-grid-check-row').check()
  cy.get('#actDelete').click()
  cy.contains(' [ Selected record(s) have been deleted. ]').should('be.visible')
  cy.get('#actSearch').click()
  cy.wait(5000)
  cy.contains('[ No records met the search criteria. Please change the criteria and search again. ]').should('be.visible')
  })

  it('Lookup -->Store State', () => {
    
    cy.login()
    cy.get('#actOpenSystemPaths').click()
    cy.get('#txtPathDescription').type("test1625131848616")
    cy.get('#actMisc').click()
    cy.contains('[ Default values saved successfully. ]').should('be.visible')  
    cy.get('#actSearch').click()
    cy.contains('[ 1 Records met the search criteria. ]').should('be.visible') 
    cy.get('#actReset').click({force:true})
    cy.wait(1000)
    cy.contains('[All search criteria has been reset.]').should('be.visible')
    cy.get('#actMisc').click()
    cy.wait(1000)
    cy.get('#actSearch').click()
    cy.wait(5000)
      
    })

})

