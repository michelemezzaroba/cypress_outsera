/// <reference types = "Cypress" />

class checkoutPage {
    static addItemToCart() {
      cy.get('.inventory_item').first().find('.btn_inventory').click()
    }
  
    static navigateToCart() {
      cy.get('.shopping_cart_link').click()
      cy.get('.checkout_button').click()
    }
  
    static fillPaymentDetails() {
      cy.get('#first-name').type('João')
      cy.get('#last-name').type('Silva')
      cy.get('#postal-code').type('12345')
      cy.get('.cart_button').click()
    }
  
    static completeCheckout() {
      cy.get('.cart_button').click()
    }
  }
  
  export default checkoutPage;
  