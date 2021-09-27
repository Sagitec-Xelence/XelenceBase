/// <reference types="cypress" />
import helper from '../../PageObjectModel/helper'
describe('system settings', () => {
    const hp = new helper()
    var random_string
  it('Maintenance -->Save ', () => {
      
     cy.login()
     cy.get('#actOpenSystemSetings').click()
       // cy.wait(5000)
     cy.get('#actNew').click()
     cy.contains('[ Record displayed. Please make changes and press SAVE. ]').should('be.visible')
     random_string = hp.GetRandomString()
     cy.get('#txtSettingName').should('be.visible').type('Newsetting'+random_string)
     cy.get('#txtSettingType').select('bool').should('have.value','bool')
     cy.get('#txtEncryptedFlag').select('No').should('have.value','N')
     cy.get('#txtSettingValue').type('true')
     cy.get('#FreezedControl_actSave').click({force:true})
        cy.wait(10000)
    //cy.get('[id^=wfmSystemSettingsMaintenance]').find('#GlobalMessageDiv').should('have.text'," [ All changes successfully saved. ]")
        cy.contains(' [ All changes successfully saved. ]').should('be.visible')  
      
      }
  )
  
    it('Lookup -->Open,Save ', () => {
      const hp = new helper()
      
     cy.login()
     cy.get('#actOpenSystemSetings').click()
        cy.wait(5000)
     cy.get('#txtSettingName').type('Newsetting'+random_string)
        cy.wait(5000)
  
     cy.get('#actSearch > .neo-action-icon').click({force:true})
        cy.wait(5000)
        cy.contains(' [ 1 Records met the search criteria. ]').should('be.visible')
     //cy.get('[id^=wfmSystemSettingsLookup]').find('#GlobalMessageDiv').should('have.text'," [ 1 Records met the search criteria. ]")   
   //  cy.contains(' [ 1 Records met the search criteria. ]').should('be.visible') 
        
     cy.get('[data-uid="0"] > .neo-row-panel-container > .neo-row-panel-body > :nth-child(n) > .neo-cell-info-field > .neo-checked-control > .neo-grid-check-row').check()
        cy.wait(5000)
     cy.get('.neo-table-cell > #actOpen > .neo-action-icon').click({force:true})
     cy.wait(5000)
     cy.contains('[ Record displayed. Please make changes and press SAVE. ]').should('be.visible')
      //cy.get('[id^=wfmSystemSettingsMaintenance]').find('#GlobalMessageDiv').should('have.text'," [ Record displayed.  Please make changes and press SAVE. ]")
      cy.get('#FreezedControl_actSave > .neo-action-icon').click({force:true})
      cy.wait(5000)
      cy.contains('No changes to save.').should('be.visible')
     // cy.get('[id^=wfmSystemSettingsMaintenance]').find('#GlobalMessageDiv').should('have.text',"No changes to save.")
      cy.get('#txtSettingValue').type("true")
      cy.get('#FreezedControl_actSave > .neo-action-icon').click()
      cy.wait(5000)
      cy.contains('[ All changes successfully saved. ]').should('be.visible')
     // cy.get('[id^=wfmSystemSettingsMaintenance]').find('#GlobalMessageDiv').should('have.text'," [ All changes successfully saved. ]")
      
      
      
    }
    )
     
    it('Lookup -->Export to Excel ', () => {
      const hp = new helper()
       cy.login()
       cy.wait(5000)
      cy.get('#actOpenSystemSetings').click()
       cy.wait(2000)
      cy.get('#actSearch > .neo-action-icon').click()
       cy.wait(2000)
      cy.get('#actExport > .neo-action-icon').click()
      cy.wait(2000)
      cy.get('#clickExcel > .neo-action-icon').click()
      cy.wait(2000)
     // cy.contains('Records exported successfully to excel.').should('be.visible')
     // cy.get('[id^=wfmSystemSettingsLookup]').find('#GlobalMessageDiv').should('have.text',"Records exported successfully to excel.")
     cy.get('#CenterSplitter').scrollTo('top')
     cy.get('[id^=CenterSplitter]').find('.GlobalMessage[tabindex="0"]').contains("Records exported successfully to excel.").should('be.visible')
     // cy.get('#wfmSystemSettingsLookup > #GLobalMessageDiv').should('have.class','GlobalMessage')
      
       
    }
    )
  
    it('Lookup -->Delete ', () => {
      const hp = new helper()
      
     cy.login()
     cy.get('#actOpenSystemSetings').click()
        cy.wait(5000)
     cy.get('#txtSettingName').type('Newsetting'+random_string)
        cy.wait(5000)
     cy.get('#actSearch > .neo-action-icon').click()
     cy.get('[data-uid="0"] > .neo-row-panel-container > .neo-row-panel-body > :nth-child(n) > .neo-cell-info-field > .neo-checked-control > .neo-grid-check-row').check()
        cy.wait(5000)
     cy.get('#actDelete > .neo-action-icon').click()
     cy.contains('[ Selected record(s) have been deleted. ]').should('be.visible')
        
    // cy.get('[id^=wfmUserMaintenance]').find('#GlobalMessageDiv').should('have.text'," [ Selected record(s) have been deleted. ]")
      
       
    })
   
})  