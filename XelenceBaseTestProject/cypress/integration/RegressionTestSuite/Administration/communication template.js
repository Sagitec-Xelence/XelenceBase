 /// <reference types="cypress" />
 import helper from '../../PageObjectModel/helper'
 describe('Communication Template', () => {
  const hp=new helper()
it('Lookup -->search,Open', () => {
  cy.login()
  cy.wait(6000)
  cy.get('#actOpenCommunicationTemplate > .neo-action-icon').click()
  cy.wait(2000)
  cy.get('#actSearch > .neo-action-icon').click({force:true})
  cy.wait(2000)
  cy.contains(' [ 189 Records met the search criteria. This exceeds the maximum limit of 100. Please change the criteria and search again ]').should('be.visible')
  cy.get('[data-uid="0"] > .neo-row-panel-container > .neo-row-panel-body > :nth-child(n) > .neo-cell-info-field > .neo-grid-check-row').check()
  cy.get('.neo-table-cell > #actOpen > .neo-action-icon').click()
  cy.wait(3000)
  cy.get('.neo-action-breadcrumb-close').click({force:true})
  cy.wait(2000)
  cy.get('#actReset > .neo-action-icon').click({force:true})
  cy.get('.neo-table-cell > #actOpen > .neo-action-icon').click({force:true})
  cy.wait(2000)
  cy.contains('No record selected. Please select record(s) and try again.').should('be.visible')
})

it('Lookup -->Reset', () => {
  cy.login()
  cy.wait(6000)
  cy.get('#actOpenCommunicationTemplate > .neo-action-icon').click()
  cy.wait(2000)
  cy.get('#actSearch > .neo-action-icon').click({force:true})
  cy.wait(2000)
  cy.get('#actReset > .neo-action-icon').click({force:true})
  cy.wait(5000)
  cy.contains('[All search criteria has been reset.]').should('be.visible')
})
 
  it('Lookup -->Store State', () => {
  cy.login()
  cy.wait(6000)
  cy.get('#actOpenCommunicationTemplate > .neo-action-icon').click()
  cy.wait(2000)
  cy.get('#actSearch > .neo-action-icon').click({force:true})
  cy.wait(2000)
  cy.get('#actMisc > .neo-action-icon').click({force:true})
  cy.wait(5000)
  cy.contains(' [ Default values saved successfully. ]').should('be.visible')
  cy.wait(2000)
  cy.get('#ddlCommunicationCategory').select('Mailing').should('have.value','MAIL')
  cy.get('#actSearch > .neo-action-icon').click({force:true})
  cy.wait(2000)
  cy.get('#actReset > .neo-action-icon').click({force:true})
  cy.wait(2000)
  })
  it('Lookup -->Export', () => {
  cy.login()
  cy.wait(6000)
  cy.get('#actOpenCommunicationTemplate > .neo-action-icon').click()
  cy.wait(2000)
  cy.get('#actSearch > .neo-action-icon').click({force:true})
  cy.wait(3000)
  cy.get('#actExport > .neo-action-icon').click({force:true})
  cy.contains('Export To Excel dialog launched for selecting the grid columns.').should('be.visible')
  cy.get('#clickExcel > .neo-action-icon').click({force:true})
  cy.wait(2000)
  //cy.contains('Records exported successfully to excel.').should('be.visible')
  cy.get('#wfmCorTemplatesLookup > #GLobalMessageDiv').should('have.class','GlobalMessage')
})

  it('Maintenance -->Save,Refresh', () => {
  cy.login()
  cy.get('#actOpenCommunicationTemplate > .neo-action-icon').click()
  cy.get('#actNew > .neo-action-icon').click({force:true})
  //cy.contains('[ Record displayed.  Please make changes and press SAVE. ]').should('be.visible')
  cy.get('#wfmCorTemplatesMaintenance0 > #GLobalMessageDiv').should('have.class','GlobalMessage')
  cy.wait(2000)
  cy.get('#FreezedControl_actSave > .neo-action-icon').click({force:true})
  cy.get('#tblMain > :nth-child(1) > :nth-child(1) > .neo-group-container > .validator-error')
  var random_string = hp.GetRandomString()
  cy.get(':nth-child(1) > :nth-child(1) > .neo-group-container > #txtTemplateCode').should('be.visible').type('test'+random_string)
  cy.get('#FreezedControl_actSave > .neo-action-icon').click({force:true})
  cy.get('#tblMain > :nth-child(1) > :nth-child(2) > .neo-group-container > .validator-error')
  cy.get(':nth-child(1) > :nth-child(2) > .neo-group-container > #txtTemplateName').should('be.visible').type('test'+random_string)
  cy.get('#txtTemplateDesc').should('be.visible').type('test'+random_string)
  cy.get('#ddlDeliveryMethod').select('E-mail').should('have.value','EMAL')
  cy.get('#ddlCommType').select('Detailed Communication').should('have.value','DECO')
  cy.get('#ddlStatus').select('Active').should('have.value','A')
  cy.get('#chkOverrideRecipientDeliveryPreference').check()
  cy.get('#ddlCommunicationCategory').select('Mailing').should('have.value','MAIL')
  cy.get('#ddlDeliveryMethod1').select('E-mail').should('have.value','EMAL')
  cy.get('#txtPrintDocTypeId').should('be.visible').type('1987545')
  cy.get('#txtNotificationTemplate').select('Test1').should('have.value','1')
  cy.get('#ddlNotificationPrefix').select('Account Updated').should('have.value','ACUP')
  cy.get('#ddlPriorityCode1').select('High').should('have.value','HIGH')
  cy.get('#txtNotificationSubjectLine').should('be.visible').type('test'+random_string)
  cy.get('#chkFormTemplateFlag').check()
  cy.get('#chkSystem').check()
  //cy.get('#files')
  cy.get('#ddlDueDateDeterminedByValue').select('Generation Date').should('have.value','GNDT')
  cy.get('#chkMassCommunication').check()
  //cy.get(':nth-child(13) > :nth-child(1) > .neo-group-container > .neo-datetime-wrapper > .ui-datepicker-trigger > .neo-datepick-icon').click()
  cy.get('#txtResourceId').type('test')
  cy.get('#FreezedControl_actSave > .neo-action-icon').click({force:true})
  cy.wait(3000)
  cy.contains('[ All changes successfully saved. ]').should('be.visible')
  cy.wait(3000)
  cy.get('#FreezedControl_actRefresh > .neo-action-icon').click({force:true})
  cy.contains('[ All changes successfully cancelled. ]').should('be.visible')
  cy.wait(3000)
  cy.get('.neo-action-breadcrumb-close').click()
  })
  it('Lookup -->Delete', () => {
  cy.login()
  cy.get('#actOpenCommunicationTemplate > .neo-action-icon').click()
  cy.wait(2000)
  cy.get('#actSearch > .neo-action-icon').click({force:true})
  cy.wait(3000)
  cy.get('#actDelete > .neo-action-icon').click({force:true})
  cy.contains('Please select record(s).').should('be.visible')
  cy.wait(3000)
  cy.get('[data-uid="0"] > .neo-row-panel-container > .neo-row-panel-body > :nth-child(n) > .neo-cell-info-field > .neo-grid-check-row').click()
  cy.wait(2000)
  cy.get('#actDelete > .neo-action-icon').click({force:true})
  cy.wait(5000)
  //cy.contains('[ Selected record(s) have been deleted. ]').should('be.visible')
  cy.get('#wfmCorTemplatesLookup > #GLobalMessageDiv').should('have.class','GlobalMessage')
    
})
})