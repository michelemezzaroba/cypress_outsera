/// <reference types = "Cypress" />

class loginPage {
    static visit() {
      cy.visit()
    }
  
    static fillUsername(username) {
      cy.get('#user-name').type(username)
    }
  
    static fillPassword(password) {
      cy.get('#password').type(password)
    }
  
    static submit() {
      cy.get('#login-button').click()
    }
  }
  
  export default loginPage;
  