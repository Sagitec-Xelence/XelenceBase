/// <reference types="cypress" />
describe('Login ', () => {
  it('Login with invalid cred', () => {
      cy.visit('http://192.10.215.117/XelenceBase/Account/Login#')
      cy.get('#btnLogin').click()
      cy.get(':nth-child(1) > .neo-table-cell > .neo-group-container > .validator-error').should('be.visible')
      cy.wait(2000)
      cy.get(':nth-child(2) > .neo-table-cell > .neo-group-container > .validator-error').should('be.visible')
      cy.wait(2000)
      cy.get('#txtUserName').type("Rahul")
      cy.get('#txtPassword').type("t")
      cy.wait(2000)
      cy.get('#btnLogin').click()
      
      cy.get('#wfmLogin > #GlobalMessageDiv').should('be.visible')
      cy.wait(2000)
  })
  
  it('Login with valid cred',()=> {
      cy.visit('http://192.10.215.117/XelenceBase/Account/Login#')
      cy.wait(2000)
      cy.get('#txtUserName').type("Rahul.Mane")
      cy.get('#txtPassword').type("1")
      cy.get('#btnLogin').click()
      cy.wait(2000)
      cy.title().should('eq','DashBoard')
      cy.wait(2000)
      cy.get('#btnWelComeDivCollapseExpand').click()
      cy.get('#lnkLogoff').click()   
       
  })
})