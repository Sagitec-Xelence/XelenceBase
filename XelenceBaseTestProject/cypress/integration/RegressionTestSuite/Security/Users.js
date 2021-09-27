/// <reference types="cypress" />
import helper from '../../PageObjectModel/helper'
describe('User', () => {
    const hp = new helper()
    const uniqueSeed = Date.now().toString();
  it('Maintenance -->Save ', () => {
      
     cy.login()
     cy.wait(500)
     cy.get('#actOpenUser').click()
        cy.wait(5000)
     cy.get('#actNew').click()
        cy.wait(5000)
      
      cy.get('#txtUserID').type(uniqueSeed)
     // cy.get('#txtUserID').type("123");
      cy.get('#txtFirstName').type("Yogesh");
      cy.get('#txtLastName').type("last")
      cy.get('#txtBeginDate').type("05/02/2001")
      cy.get('#ddlUserStatus').select('Active')
      cy.get('#ddlUserType').select('Administrator')
      cy.get('#txtEmailAddress').type("vijay.santangopal@sagitec.com")
      cy.get('#FreezedControl_actSave').click()
      cy.get('#CenterSplitter').scrollTo('top')
      cy.wait(5000)
    // cy.get('[id^=wfmUserMaintenance]').find('#GlobalMessageDiv').should('have.text'," [ All changes successfully saved. ]")
     cy.contains(' [ All changes successfully saved. ]').should('be.visible')  
   
      }
  )
  
    it('Lookup -->Open and Save ', () => {
      const hp = new helper()
        cy.wait(5000)
     cy.login()
     cy.get('#actOpenUser').click()
        cy.wait(5000)
     cy.get('#txtFirstName').type('Yogesh')
        cy.wait(5000)
  
     cy.get('#actSearch').click()
        cy.wait(5000)
     
     //   cy.get('[id^=wfmUserLookup]').find('#GlobalMessageDiv').should('have.text'," [ 1 Records met the search criteria. ]")  
     //cy.contains(' [ 1 Records met the search criteria. ]').should('be.visible') 
     
        
     cy.get('[data-uid="0"] > .neo-row-panel-container > .neo-row-panel-body > :nth-child(n) > .neo-cell-info-field > .neo-checked-control > .neo-grid-check-row').check()
        cy.wait(5000)
     cy.get('.neo-table-cell > #actOpen > .neo-action-icon').click()
     cy.wait(5000)
      //cy.get('[id^=wfmUserMaintenance]').find('#GlobalMessageDiv').should('have.text'," [ Record displayed.  Please make changes and press SAVE. ]")
      //cy.contains(' [ Record displayed.  Please make changes and press SAVE. ]').should('be.visible')
      //cy.get('#CenterSplitter').scrollTo('top')
      //cy.contains(' [ Record displayed.  Please make changes and press SAVE. ]').should('be.visible')
      
      cy.get('#FreezedControl_actSave > .neo-action-icon').click({force:true})
      cy.wait(5000)
      //cy.get('[id^=wfmUserMaintenance]').find('#GlobalMessageDiv').should('have.text',"No changes to save.")
      cy.contains('No changes to save.').should('be.visible')
        
      cy.get('#ddlIstrUserRoleId').select("Application")
      cy.get('#actExecute1').click()
      cy.wait(5000)
      cy.get('#txtLastName').type("Last")
            cy.get('#FreezedControl_actSave > .neo-action-icon').click()
           //cy.get('[id^=wfmUserMaintenance]').find('#GlobalMessageDiv').should('have.text'," [ All changes successfully saved. ]")
           cy.wait(5000)
           cy.get('#CenterSplitter').scrollTo('top')
      
      cy.contains(' [ All changes successfully saved. ]').should('be.visible')  
   
      
      
    }
    )
  
       
    it('Lookup -->Export to Excel ', () => {
      const hp = new helper()
       cy.wait(7000)
      cy.login()
      cy.get('#actOpenUser').click()
       cy.wait(5000)
      cy.get('#actSearch > .neo-action-icon').click()
       cy.wait(5000)
      cy.get('#actExport > .neo-action-icon').click()
      cy.get('#clickExcel > .neo-action-icon').click()
      //cy.get('[id^=wfmUserLookup]').find('#GlobalMessageDiv').should('have.text',"Records exported successfully to excel.")
      cy.get('#CenterSplitter').scrollTo('top')
      cy.wait(5000)
      cy.contains('Records exported successfully to excel.').should('be.visible')  
   
       
    }
    )
  
   //  it('Verify Delete ', () => {
   //    const hp = new helper()
   //      cy.wait(10000)
   //   cy.login()
   //   cy.get('#actOpenUser').click()
   //      cy.wait(5000)
   //      cy.get('#txtFirstName').type('Vijay')
   //      cy.wait(5000)
   //   cy.get('#actSearch > .neo-action-icon').click()
   //   cy.get('[data-uid="0"] > .neo-row-panel-container > .neo-row-panel-body > :nth-child(n) > .neo-cell-info-field > .neo-checked-control > .neo-grid-check-row').check()
   //      cy.wait(5000)
   //   cy.get('#actDelete > .neo-action-icon').click()
        
   //   //cy.get('[id^=wfmSystemSettingsMaintenance]').find('#GlobalMessageDiv').should('have.text'," [ Selected record(s) have been deleted. ]")
   //   cy.get('#CenterSplitter').scrollTo('top')
   //   cy.wait(5000)
   //   cy.contains(' [ Selected record(s) have been deleted. ]').should('be.visible')  
       
   //  }
   //  )
   
      
  
    
  })
  