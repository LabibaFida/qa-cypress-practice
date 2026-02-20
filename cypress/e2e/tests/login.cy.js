/// <reference types="cypress" />

describe('SauceDemo - Login Functionality', () => {

  beforeEach(() => {
    // Visit the application
    cy.visit('https://www.saucedemo.com/')
  })

  it('Verify user can login with valid credentials', () => {

    // Enter valid username
    cy.get('#user-name')
      .should('be.visible')
      .type('standard_user')

    // Enter valid password
    cy.get('#password')
      .should('be.visible')
      .type('secret_sauce')

    // Click login button
    cy.get('#login-button')
      .should('be.enabled')
      .click()

    // Verify successful login by checking URL
    cy.url().should('include', '/inventory.html')

    // Verify inventory page is displayed
    cy.get('.title')
      .should('be.visible')
      .and('contain', 'Products')
  })

it(' Verify error message is displayed for invalid login credentials', () => {
  
  // Enter invalid username
  cy.get('#user-name').type('invalid_user');
  
  // Enter invalid password
  cy.get('#password').type('wrong_password');
  
  // Click Login button
  cy.get('#login-button').click();
  
  // Verify error message is visible
  cy.get('[data-test="error"]')
    .should('be.visible')
    .and('contain', 'Username and password do not match');
});
})