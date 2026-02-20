/// <reference types="cypress" />

describe('SauceDemo - Product Sort Dropdown', () => {

const dropdown = '.product_sort_container';

  beforeEach(() => {
    // Visit the app and login first
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.url().should('include', '/inventory.html')
  });

  it('TC_01 - Verify dropdown options and selection', () => {

    // Make dropdown an alias for reuse
    cy.get(dropdown).as('sortDropdown');
    cy.get('@sortDropdown').should('be.visible');

    // Select "Name (A to Z)" and verify
    cy.get('@sortDropdown').select('Name (A to Z)');
    cy.get(dropdown).should('have.value', 'az');

    // Select "Name (Z to A)" and verify
    cy.get('@sortDropdown').select('Name (Z to A)');
    cy.get(dropdown).should('have.value', 'za');

    // Select "Price (low to high)" and verify
    cy.get('@sortDropdown').select('Price (low to high)');
    cy.get(dropdown).should('have.value', 'lohi');

    // Select "Price (high to low)" and verify
    cy.get('@sortDropdown').select('Price (high to low)');
    cy.get(dropdown).should('have.value', 'hilo');
  });
});