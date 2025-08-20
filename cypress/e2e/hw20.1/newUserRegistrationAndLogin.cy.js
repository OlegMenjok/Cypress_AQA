import { getRandomNumber } from '../../utils/helpers';
import { signupPage } from '../pom/SignupPage';

describe('New user registration and login', () => {
  const emailAddress = `stress${getRandomNumber(1, 10000)}@gmail.com`;

  beforeEach(() => {
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
  });

  it('check field name | positive | registration', () => {
    // Arrange
    signupPage.openSignup();
    signupPage.typeName('Stress');
    signupPage.checkButtonEnabled(false);

    signupPage.typeLastName('Test');
    signupPage.checkButtonEnabled(false);

    signupPage.typeEmail(emailAddress);
    signupPage.checkButtonEnabled(false);

    signupPage.typePassword('superSecret123');
    signupPage.checkButtonEnabled(false);

    signupPage.typeRepeatPassword('superSecret123');
    signupPage.checkButtonEnabled(true);

    // Act
    signupPage.clickSubmit();

    // Assert
    signupPage.checkSuccessMessage('Registration complete');
  });

  it('check field name | positive | login', () => {
    // Arrange
    cy.get(signupPage.loginButton).click();
    cy.login();

    // Act
    cy.get('.modal-footer > .btn-primary').click();

    // Assert
    signupPage.checkSuccessMessage('You have been successfully logged in');
  });
});
