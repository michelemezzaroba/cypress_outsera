/// <reference types = "Cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

import checkoutPage from '../../pages/checkoutPage'

const checkoutPage = new CheckoutPage()

When('o usuário adiciona um produto ao carrinho', () => {
  checkoutPage.addItemToCart()
})

When('navega até o carrinho', () => {
  checkoutPage.navigateToCart()
})

When('preenche as informações de pagamento', () => {
  checkoutPage.fillPaymentDetails()
})

Then('a compra é finalizada com sucesso', () => {
  checkoutPage.completeCheckout()
  cy.url().should('include', '/checkout-complete.html')
  cy.contains('Thank you for your order').should('be.visible')
})
