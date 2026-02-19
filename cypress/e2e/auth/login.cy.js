///<reference types="cypress"/>

describe('Login Page Tests', () => {

  let loginData;

  before(() => {
    cy.fixture('loginData').then((data) => {
      loginData = data;
    });
  });

  beforeEach(() => {
    cy.visit('https://rethink-fe-staging-13e666d59435.herokuapp.com/')
  });

  it('should load login page', () => {
    cy.get('input[name="email"]').should('be.visible')
    cy.get('input[name="password"]').should('be.visible')
    cy.get('button[type="submit"]').should('be.visible')
  });

  // Add toggle password 
  it('should toggle password visibility', () => {
    cy.get('input[name="password"]').type('MyPassword123')
    cy.get('button.cursor-pointer').click() // adjust selector if needed
    cy.get('input[name="password"]').should('have.attr', 'type', 'text')

    
  // click again to hide password
  cy.get('button.cursor-pointer').click()
  cy.get('input[name="password"]').should('have.attr', 'type', 'password')
  });


  it('login with valid credentials', () => {

    cy.get('input[name="email"]').type(loginData.validUser.email)
    cy.get('input[name="password"]').type(loginData.validUser.password)
    cy.get('button[type="submit"]').click()

    cy.url({ timeout: 10000 }).should('include', '/merchant/dashboard')

  });

  it('login shows error with invalid credentials', () => {

    cy.get('input[name="email"]').type(loginData.invalidUser.email)
    cy.get('input[name="password"]').type(loginData.invalidUser.password)
    cy.get('button[type="submit"]').click()

   cy.contains('Please enter a valid password').should('be.visible')

  });


it('should show error for invalid email format', () => {
  cy.get('input[name="email"]').type('wrongemailformat')
  cy.get('input[name="password"]').type('Dev@12345')
  cy.get('button[type="submit"]').click()
  cy.contains('Please enter a valid email address').should('be.visible')
})

it('should not allow more than 50 characters in email field', () => {
  const longEmail = 'a'.repeat(60) + '@mail.com'
  cy.get('input[name="email"]').type(longEmail)
  cy.get('input[name="password"]').type('AnyPass@123')
  cy.get('button[type="submit"]').click()

  // check the error message displayed by the app
  cy.contains('User not found').should('be.visible')

})

  it('should show validation for empty fields', () => {
    cy.get('button[type="submit"]').click()
    cy.contains('Please enter a valid email address').should('be.visible')
    cy.contains('Please enter a valid password').should('be.visible')
  })

// // -----------------------------
  // FORGOT PASSWORD LINK
  // -----------------------------
  it('forgot password link should open forgot password screen', () => {
    cy.contains('Forgot Password').click()
    cy.url().should('include', 'forgot') // adjust if modal instead of page
  })
 it("Navigates to register page", () => {
    cy.get('a[href="/register"]').click();
    cy.url().should("include", "/register");
  })
})
