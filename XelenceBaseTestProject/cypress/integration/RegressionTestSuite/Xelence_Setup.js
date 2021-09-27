/// <reference types="cypress" />
import helper from '../PageObjectModel/helper'

describe('Code', () => {
const uniqueSeed = Date.now().toString();
const hp=new helper() 

beforeEach(() => {
  Cypress.Cookies.preserveOnce('MaintknXelenceBase','MainPRMHASHXelenceBase','MainExtraPRMXelenceBase', '.AspNetCore.Antiforgery.BcPEBnojZEA.XelenceBase.Main')   
})

it('Maintenance_New,save', () => {
    cy.login()
    cy.wait(5000)
    cy.get('#actOpenCode').click()
      cy.get('#btnNew').click()
      cy.contains('[ Record displayed. Please make changes and press SAVE. ]').should('be.visible')
      cy.get('#txbCodeID').type(uniqueSeed)
    var random_string = hp.GetRandomString()
    cy.get('#txtCodeDescription').should('be.visible').type('test'+random_string)
    var random_string = hp.GetRandomString()
    cy.get('#txtdata1_caption').should('be.visible').type('test'+random_string)
    cy.get('#txtdata1_type').select('Integer').should('have.value','int')
    var random_string = hp.GetRandomString()
    cy.get('#txtdata2_caption').should('be.visible').type('test'+random_string)
    cy.get('#txtdata2_type').select('Integer').should('have.value','int')
    var random_string = hp.GetRandomString()
    cy.get('#txtdata3_caption').should('be.visible').type('test'+random_string)
    cy.get('#txtdata3_type').select('Integer').should('have.value','int')
    var random_string = hp.GetRandomString()
    cy.get('#txtfirst_maintenance_item').should('be.visible').type('test'+random_string)
    cy.get('#btnSave').click({force:true})
    cy.wait(5000)
    cy.contains('[ All changes successfully saved. ]').should('be.visible')
    cy.get('#btnSave').click({force:true})
    cy.wait(2000)
    cy.contains('No changes to save.').should('be.visible')
    cy.get('.neo-action-breadcrumb-close').click()
    cy.wait(3000)
    cy.get('#btnReset > .neo-action-icon').click()
  })

it(' Maintenance_New,delete,save', () => {
  //const hp=new helper() 
  //cy.login()
  //cy.get('#actOpenCode').click()
  cy.get('#txtcode_id').type(uniqueSeed)
  cy.get('#btnSearch > .neo-action-icon').click()
  cy.wait(3000)
  cy.contains(' [ 1 Records met the search criteria. ]').should('be.visible')
  
  cy.get('.GridLinks').click()
  cy.get('#dvDiv1 > #tblResult > :nth-child(n) > .neo-table-cell > #btnDelete').click()
  cy.contains('Please select record(s).').should('be.visible')
  cy.get('#btnNew').click({force:true})
  cy.wait(5000)
    var random_string = hp.GetRandomString()
    cy.get('#txtcodevalue').should('be.visible').type('test'+random_string)
   
   var random_string = hp.GetRandomString()
    cy.get('#txtDescription').should('be.visible').type('test'+random_string)
    
   
    cy.get('#FreezedControl_btnSave').click()
    cy.wait(5000)
    cy.BreadcrumeClose()
    cy.get('#dvDiv1 > #tblResult > :nth-child(n) > .neo-table-cell > #GridTable_dgrResult > #GridMobileContainer_dgrResult > .neo-row-panel > .neo-row-panel-container > .neo-row-panel-body > :nth-child(n) > .neo-cell-info-field > .neo-checked-control > .neo-grid-check-row').check()
   
    cy.wait(2000)
    cy.get('#dvDiv1 > #tblResult > :nth-child(n) > .neo-table-cell > #btnDelete > .neo-action-icon').click({force:true})
    cy.wait(5000)
    cy.contains(' [ Selected record(s) have been deleted. ]').should('be.visible')
    cy.get('.neo-action-breadcrumb-close').click()
    cy.wait(3000)
  
})
it('Maintenance_Refresh ', () => {
  //cy.login()
  //cy.get('#actOpenCode').click()
  cy.get('#txtcode_id').type(uniqueSeed)
  cy.get('#btnSearch > .neo-action-icon').click()
  cy.wait(3000)
  
  cy.get('.GridLinks').click()
    cy.get('#FreezedControl_btnCancel > .neo-action-icon').click({force:true})
    cy.wait(5000)
    cy.contains('[ All changes successfully cancelled. ]').should('be.visible')
    cy.get('.neo-action-breadcrumb-close').click()
    cy.wait(3000)
 
  })
  it('Lookup_Store State,Reset', () => {
    
    //cy.login()
    //cy.get('#actOpenCode').click()
    cy.get('#btnReset > .neo-action-icon').click()
    cy.get('#txtdescription').type('gender')
    cy.get('#btnStoreDefaults').click()
    cy.contains('[ Default values saved successfully. ]').should('be.visible')  
    cy.get('#btnSearch').click()
    cy.wait(5000)
    cy.get('#btnReset').click({force:true})
    cy.wait(5000)
    cy.contains('[All search criteria has been reset.]').should('be.visible')
    cy.get('#btnStoreDefaults').click()
    cy.wait(1000)
    cy.get('#btnSearch').click()
    cy.wait(5000)
    cy.get('.neo-action-breadcrumb-close').click()
    cy.wait(3000)      
    })

})

// ///// <reference types="cypress" />
// //import helper from '../../PageObjectModel/helper'
// //describe('system settings', () => {
//     //const hp = new helper()
//     //var random_string

//     //beforeEach(() => {
//       //Cypress.Cookies.preserveOnce('MaintknXelenceBase','MainPRMHASHXelenceBase','MainExtraPRMXelenceBase', '.AspNetCore.Antiforgery.BcPEBnojZEA.XelenceBase.Main')   
//   //})

//   //it('Maintenance -->Save ', () => {
      
//      //cy.login()
//      //cy.get('#actOpenSystemSetings').click()
//        // cy.wait(5000)
//      //cy.get('#actNew').click()
//      //cy.contains('[ Record displayed. Please make changes and press SAVE. ]').should('be.visible')
//      //random_string = hp.GetRandomString()
//      //cy.get('#txtSettingName').should('be.visible').type('Newsetting'+random_string)
//      //cy.get('#txtSettingType').select('int').should('have.value','int')
//      //cy.get('#txtSettingValue').type('6')
//      //cy.get('.neo-checkbox-wrapper > #txtEncryptedFlag').click()
//      //cy.get('#chkRefreshableFlag').click()
     
//      //cy.get('#FreezedControl_actSave').click({force:true})
//         //cy.wait(10000)
    
//         //cy.contains(' [ All changes successfully saved. ]').should('be.visible')  
      
//       //})
  
//     it('Lookup -->Open,Save ', () => {
//       const hp = new helper()
      
//      //cy.login()
//      cy.get('#actOpenSystemSetings').click()
//         cy.wait(5000)
//      cy.get('#txtSettingName').type('Newsetting'+random_string)
//         cy.wait(5000)
  
//      cy.get('#actSearch > .neo-action-icon').click({force:true})
//         cy.wait(5000)
//         cy.contains(' [ 1 Records met the search criteria. ]').should('be.visible')
      
        
//      cy.get('[data-uid="0"] > .neo-row-panel-container > .neo-row-panel-body > :nth-child(n) > .neo-cell-info-field > .neo-checked-control > .neo-grid-check-row').check()
//         cy.wait(5000)
//      cy.get('.neo-table-cell > #actOpen > .neo-action-icon').click({force:true})
//      cy.wait(5000)
//      cy.contains('[ Record displayed. Please make changes and press SAVE. ]').should('be.visible')
     
//       cy.get('#FreezedControl_actSave > .neo-action-icon').click({force:true})
//       cy.wait(5000)
//       cy.contains('No changes to save.').should('be.visible')
     
//       cy.get('#txtSettingValue').type("true")
//       cy.get('#FreezedControl_actSave > .neo-action-icon').click()
//       cy.wait(5000)
//       cy.contains('[ All changes successfully saved. ]').should('be.visible') 
//     })
     
//     it('Lookup -->Export to Excel ', () => {
//       const hp = new helper()
//        //cy.login()
//        cy.wait(5000)
//       //cy.get('#actOpenSystemSetings').click()
//        cy.wait(2000)
//       cy.get('#actSearch > .neo-action-icon').click()
//        cy.wait(2000)
//       cy.get('#actExport > .neo-action-icon').click()
//       cy.wait(2000)
//       cy.get('#clickExcel > .neo-action-icon').click()
//       cy.wait(2000)
     
//      cy.get('#CenterSplitter').scrollTo('top')
//      cy.get('[id^=CenterSplitter]').find('.GlobalMessage[tabindex="0"]').contains("Records exported successfully to excel.").should('be.visible')
//     })
  
//     it('Lookup -->Delete ', () => {
//       const hp = new helper()
      
//      //cy.login()
//      //cy.get('#actOpenSystemSetings').click()
//         cy.wait(5000)
//      cy.get('#txtSettingName').type('Newsetting'+random_string)
//         cy.wait(5000)
//      cy.get('#actSearch > .neo-action-icon').click()
//      cy.get('[data-uid="0"] > .neo-row-panel-container > .neo-row-panel-body > :nth-child(n) > .neo-cell-info-field > .neo-checked-control > .neo-grid-check-row').check()
//         cy.wait(5000)
//      cy.get('#actDelete > .neo-action-icon').click()
//      cy.contains('[ Selected record(s) have been deleted. ]').should('be.visible')
//      cy.BreadcrumeClose()
//     })
// })  

///// <reference types="cypress" />
//import helper from '../../PageObjectModel/helper'
describe('System Path', () => {
  const uniqueSeed = Date.now().toString();
 const hp=new helper() 

 beforeEach(() => {
  Cypress.Cookies.preserveOnce('MaintknXelenceBase','MainPRMHASHXelenceBase','MainExtraPRMXelenceBase', '.AspNetCore.Antiforgery.BcPEBnojZEA.XelenceBase.Main')   
})

it('Maintenance -->Save', () => {
//cy.login()
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

cy.get('#FreezedControl_actRefresh').click({force:true})
 cy.wait(5000)
 cy.contains(' [ All changes successfully cancelled. ]').should('be.visible')
 cy.BreadcrumeClose()

})

// it('Lookup -->Search,open', () => {
//     cy.login()
//     cy.get('#actOpenSystemPaths').click()
    

//   cy.get('#txtPathDescription').type('test'+uniqueSeed)
//   cy.get('#actSearch').click()
//   cy.wait(3000)
//   cy.contains(' [ 1 Records met the search criteria. ]').should('be.visible')
  
//   cy.wait(3000)
//   cy.get('.neo-grid-check-row').check()
//   cy.get('.neo-table-cell > #actOpen > .neo-action-icon').click()
//   cy.BreadcrumeClose()
// })

it('Lookup -->reset', () => {
    //cy.login()
    //cy.get('#actOpenSystemPaths').click()
    
    cy.wait(2000)
    cy.get('#actReset').click({force:true})
    cy.get('#txtPathDescription').type('test'+uniqueSeed)
  cy.get('#actSearch').click()
  cy.wait(3000)
  cy.get('#actReset').click({force:true})
  cy.wait(5000)
  cy.contains('[All search criteria has been reset.]').should('be.visible')
  //cy.get('[id^=wfmMessagesLookup]').find('#GlobalMessageDiv').should('have.text'," [All search criteria has been reset.]")
  cy.get('#actOpen').click()
 
  //cy.get('#CenterSplitter').scrollTo('top')
  cy.wait(5000)
  cy.contains('No record selected. Please select record(s) and try again.').should('be.visible')
 // cy.wait(5000)
 // cy.get('[id^=wfmMessagesLookup]').find('#div#GlobalMessageDiv').should('have.text'," No record selected. Please select record(s) and try again.")
  cy.get('#actDelete').click()
 
  //cy.get('#CenterSplitter').scrollTo('top')
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
  //cy.login()
  //cy.get('#actOpenSystemPaths').click()
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
    
    //cy.login()
    //cy.get('#actOpenSystemPaths').click()
    cy.get('#txtPathDescription').type("test1625131848616")
    cy.get('#actMisc').click()
    cy.contains('[ Default values saved successfully. ]').should('be.visible')  
    cy.get('#actReset').click({force:true})
    cy.wait(1000)
    cy.contains('[All search criteria has been reset.]').should('be.visible')
    cy.get('#actMisc').click()
    cy.wait(1000)
    cy.get('#actSearch').click()
    cy.wait(5000)
      
    })

})

