///<reference types="cypress"/>

describe('Dashboard Tests', () => {

  before(() => {
    // Visit login page
    cy.visit('https://rethink-fe-staging-13e666d59435.herokuapp.com/')

    // Login with valid credentials
    cy.get('input[name="email"]').type('qimekyvim@mailinator.com')
    cy.get('input[name="password"]').type('Dev@12345')
    cy.get('button[type="submit"]').click()

    // Wait for overlay to disappear
  cy.get('div.fixed.inset-0.bg-white', { timeout: 15000 }).should('not.exist')
  
    // Wait for dashboard UI instead of URL
  cy.contains('Dashboard', { timeout: 10000 }).should('be.visible')

  })
it('should load dashboard successfully', () => {
    cy.url().should('include', '/merchant/dashboard')
  })

  // -----------------------------
  // DASHBOARD LOAD
  // -----------------------------
  it('should display dashboard layout and sidebar', () => {
    cy.contains('Dashboard').should('be.visible')
    cy.get('nav').should('be.visible') // sidebar
  })

  // -----------------------------
  // DASHBOARD WIDGETS
  // -----------------------------
  it('should display dashboard overview sections', () => {
    cy.contains('Memberships Overview').should('be.visible')
    cy.contains('Offers Overview').should('be.visible')
    cy.contains('Offers Performance').should('be.visible')
  })

  // -----------------------------
  // OFFERS PERFORMANCE TABLE
  // -----------------------------
  it('should display offers performance table with data', () => {
    cy.get('table').should('be.visible')
    cy.get('table tbody tr')
      .should('have.length.greaterThan', 0)
  })

  // -----------------------------
  // SIDEBAR NAVIGATION (ONE EXAMPLE)
  // -----------------------------
  it('should navigate to Members page from sidebar', () => {
    cy.contains('Members').click()
    cy.url().should('include', '/members')
  })

  // -----------------------------
  // LOGOUT
  // -----------------------------
  it('should logout user successfully', () => {
    cy.contains('Logout').click()
    cy.url().should('include', '/login')
  })

})
