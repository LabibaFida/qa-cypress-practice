/// <reference types="cypress" />

import CheckboxPage from '../Pages/CheckBoxPage'

describe('Checkbox Module - POM Implementation', () => {

  const checkboxPage = new CheckboxPage()

  beforeEach(() => {
    checkboxPage.visit()
  })

  it('TC_01 - Verify first checkbox can be checked', () => {

    checkboxPage.checkFirstCheckbox()

    checkboxPage
      .getAllCheckboxes()
      .first()
      .should('be.checked')

  })

  it('TC_02 - Verify second checkbox can be unchecked', () => {

    checkboxPage.uncheckSecondCheckbox()

    checkboxPage
      .getAllCheckboxes()
      .eq(1)
      .should('not.be.checked')

  })

})