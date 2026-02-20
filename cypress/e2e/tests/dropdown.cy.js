/// <reference types="cypress" />

describe('SauceDemo - Product Sort Dropdown', () => {

  beforeEach(() => {
    // Visit the app and login first
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.url().should('include', '/inventory.html')
  });

  it('TC_01 - Verify dropdown options and selection', () => {
    // Check dropdown is visible
    cy.get('.product_sort_container').should('be.visible')

    // Select "Name (A to Z)" and verify
    cy.get('.product_sort_container').select('Name (A to Z)')
      .should('have.value', 'az')

    // Select "Name (Z to A)" and verify
    cy.get('.product_sort_container').select('Name (Z to A)')
      .should('have.value', 'za')

    // Select "Price (low to high)" and verify
    cy.get('.product_sort_container').select('Price (low to high)')
      .should('have.value', 'lohi')

    // Select "Price (high to low)" and verify
    cy.get('.product_sort_container').select('Price (high to low)')
      .should('have.value', 'hilo')
  });
});