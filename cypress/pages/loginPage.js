/// <reference types = "Cypress" />

class loginPage {
    visit() {
      cy.visit()
    }
  
    fillUsername(username) {
      cy.get('#user-name').type(username)
    }
  
    fillPassword(password) {
      cy.get('#password').type(password)
    }
  
    submit() {
      cy.get('#login-button').click()
    }
  }
  
  export default loginPage
  