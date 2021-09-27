/// <reference types="cypress" />
import helper from '../../PageObjectModel/helper'

describe('Security_Resource', () => {
    it('Lookup -->Search', () => {
        cy.login()
        cy.get('#actOpenResources > .neo-action-icon').click()
        cy.wait(2000)
        cy.get('#actSearch > .neo-action-icon').click()
        cy.get('#wfmResourcesLookup > #GLobalMessageDiv').should('be.visible')
        cy.wait(4000)
    })

    it('Lookup -->Refresh', () => {
        cy.login()
        cy.get('#actOpenResources > .neo-action-icon').click()
        cy.wait(2000)
        cy.get('#actSearch > .neo-action-icon').click()
        cy.wait(4000)
        cy.get('#actReset > .neo-action-icon').click()
        cy.wait(2000)
        cy.get('#wfmResourcesLookup > #GLobalMessageDiv').should('have.text',"[All search criteria has been reset.]")
        cy.wait(2000)
    })

    it('Lookup -->Store Search', () => {
        cy.wait(3000)
        cy.login()
        cy.get('#actOpenResources > .neo-action-icon').click()
        cy.wait(4000)
        cy.get('#ddlResourceType').select('Action')
        cy.get('#actMisc > .neo-action-icon').click()
        cy.wait(5000)
        cy.contains('Default values saved successfully.').should('be.visible')
        cy.get('#actReset > .neo-action-icon').click()
        cy.get('#actMisc > .neo-action-icon').click()
    })

    it('Lookup -->Open operation', () => {
        cy.wait(3000)
        cy.login()
        cy.get('#actOpenResources > .neo-action-icon').click()
        cy.wait(2000)
        cy.get('.neo-table-cell > #actOpen').click()
        cy.wait(10000)
        cy.contains('No record selected. Please select record(s) and try again.').should('be.visible')
        cy.wait(2000)
        cy.get('#actSearch > .neo-action-icon').click()
        cy.get('[data-uid="0"] > .neo-row-panel-container > .neo-row-panel-body > :nth-child(1) > .neo-cell-info-field > .neo-checked-control > .neo-grid-check-row').click()
        cy.get('[data-uid="2"] > .neo-row-panel-container > .neo-row-panel-body > :nth-child(1) > .neo-cell-info-field > .neo-checked-control > .neo-grid-check-row').click()
        cy.get('.neo-table-cell > #actOpen').click({force:true})
        cy.wait(3000)
        cy.get('.neo-action-breadcrumb-close').click()
        cy.wait(3000)
        cy.get('.neo-action-breadcrumb-close').click()
    })

    it('Lookup -->Delete', () => {
        cy.wait(3000)
        cy.login()
        cy.get('#actOpenResources > .neo-action-icon').click()
        cy.wait(2000)
        cy.get('#actDelete').click()
        cy.wait(2000)
        cy.contains('Please select record(s).').should('be.visible')
    })

    it(' Maintenance -->New record & Delete', () => {
        cy.wait(3000)
        cy.login()
        cy.get('#actOpenResources > .neo-action-icon').click()
        cy.wait(2000)
        cy.get('#actNew').click()
        cy.wait(5000)
        cy.get('#txtResourceID').type("123123213")
        cy.get(':nth-child(4) > #txtResourceDescription').type("For Testing Purpose")
        cy.get(':nth-child(6) > #ddlResourceType').select('Action')
        cy.get('#FreezedControl_actSave').click()
        cy.wait(2000)
        cy.get('#wfmResourcesMaintenance0 > #GLobalMessageDiv').should('have.text'," [ Errors found.  Record not saved. ]")
        cy.get('.neo-action-breadcrumb-close').click()
        cy.wait(3000)
        cy.get('#actNew').click()
        cy.wait(5000)
        cy.get('#txtResourceID').type("66066606")
        cy.get(':nth-child(4) > #txtResourceDescription').type("For Testing Purpose")
        cy.get(':nth-child(6) > #ddlResourceType').select('Action')
        cy.get('#FreezedControl_actSave').click({force:true})
        cy.wait(5000)
        cy.contains('[ All changes successfully saved. ]').should('be.visible')
        cy.wait(5000)
        cy.get('#ddlLiintRoleId').select('Accounts Manager')
        cy.get('#actExecute > .neo-action-icon').click()
        cy.wait(2000)
        cy.get('#FreezedControl_actSave').click({force:true})
        cy.wait(5000)
        cy.get('.neo-grid-check-row').click()
        cy.get('.col-md-8 > #actDelete > .neo-action-icon').click()
        cy.wait(5000)
        cy.contains('[ Selected record(s) have been deleted. ]').should('be.visible')
        cy.wait(2000)
        cy.get('#txtResourceID').type("660666061")
        cy.get('#FreezedControl_actRefresh > .neo-action-icon').click()
        cy.contains(' [ All changes successfully cancelled. ]').should('be.visible')
        cy.wait(2000)
        cy.get('.neo-action-breadcrumb-close').click()
        cy.wait(2000)
        cy.get('#txtResourceId').type("66066606")
        cy.get('#actSearch > .neo-action-icon').click()
        cy.wait(2000)
        cy.get('.neo-grid-check-row').click()
        cy.get('#actDelete > .neo-action-icon').click({force:true})
        cy.wait(4000)
        cy.get('#wfmResourcesLookup > #GLobalMessageDiv').should('be.visible')
    })

    it('Lookup -->Export', () => {
        cy.wait(3000)
        cy.login()
        cy.get('#actOpenResources > .neo-action-icon').click()
        cy.wait(2000)
        cy.get('#actSearch > .neo-action-icon').click()
        cy.get('[data-uid="0"] > .neo-row-panel-container > .neo-row-panel-body > :nth-child(1) > .neo-cell-info-field > .neo-checked-control > .neo-grid-check-row').click()
        cy.get('[data-uid="2"] > .neo-row-panel-container > .neo-row-panel-body > :nth-child(1) > .neo-cell-info-field > .neo-checked-control > .neo-grid-check-row').click()
        cy.get('#actExport > .neo-action-icon').click()
        cy.wait(5000)
        cy.get('#clickExcel > .neo-action-icon').click({force:true})
        cy.wait(3000)
        cy.get('#wfmResourcesLookup > #GLobalMessageDiv').should('have.text',"Records exported successfully to excel.")
    })

})