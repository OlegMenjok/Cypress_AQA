class SignupPage {
  // Селектори
  signupButton = '.hero-descriptor_btn';
  loginButton = '.header_right > .btn';
  modalHeader = 'app-signup-modal .modal-header';
  nameField = '#signupName';
  lastNameField = '#signupLastName';
  emailField = '#signupEmail';
  passwordField = '#signupPassword';
  repeatPasswordField = '#signupRepeatPassword';
  submitButton = '.modal-footer > .btn';
  successMessage = '.alert > p';
  errorMessages = '.invalid-feedback > :nth-child';

  // Методи для заповнення форми
  openSignup() {
    cy.get(this.signupButton).click();
  }

  typeName(name) {
    cy.get(this.nameField).type(name);
  }

  typeLastName(lastname) {
    cy.get(this.lastNameField).type(lastname);
  }

  typeEmail(email) {
    cy.get(this.emailField).type(email);
  }

  typePassword(password) {
    cy.get(this.passwordField).type(password, { sensitive: true });
  }

  typeRepeatPassword(password) {
    cy.get(this.repeatPasswordField).type(password, { sensitive: true });
  }

  clickModalHeader() {
    cy.get(this.modalHeader).click();
  }

  clickSubmit() {
    cy.get(this.submitButton).click();
  }

  checkErrorMessage(index, text) {
    cy.get(`${this.errorMessages}(${index})`).should('have.text', text);
  }

  checkButtonEnabled(enabled = true) {
    cy.get(this.submitButton).should(
      enabled ? 'not.be.disabled' : 'be.disabled',
    );
  }

  checkSuccessMessage(text) {
    cy.get(this.successMessage).should('have.text', text);
  }
}

export const signupPage = new SignupPage();
