class CheckboxPage {

  visit() {
    cy.visit('https://the-internet.herokuapp.com/checkboxes')
  }

  getAllCheckboxes() {
    return cy.get('input[type="checkbox"]')
  }

  checkFirstCheckbox() {
    this.getAllCheckboxes().first().check()
  }

  uncheckSecondCheckbox() {
    this.getAllCheckboxes().eq(1).uncheck()
  }

}

export default CheckboxPage 