import { signupPage } from '../hw20.1/pomSignInPage';

describe('Check registration fields', () => {
  beforeEach(() => {
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
    cy.get('.hero-descriptor_btn').click();
  });

  context('Name', () => {
    it('positive | valid name', () => {
      signupPage.typeName('Oleh');
      signupPage.clickModalHeader();
      cy.get('.invalid-feedback > :nth-child(1)').should('not.exist');
    });

    it('negative | name is number and less than 2', () => {
      signupPage.typeName('1');
      signupPage.clickModalHeader();
      signupPage.checkErrorMessage(1, 'Name is invalid');
      signupPage.checkErrorMessage(
        2,
        'Name has to be from 2 to 20 characters long',
      );
    });

    it('negative | name more than 20', () => {
      signupPage.typeName('123456789123456789123');
      signupPage.clickModalHeader();
      signupPage.checkErrorMessage(1, 'Name is invalid');
      signupPage.checkErrorMessage(
        2,
        'Name has to be from 2 to 20 characters long',
      );
    });

    it('negative | name is number', () => {
      signupPage.typeName('121');
      signupPage.clickModalHeader();
      signupPage.checkErrorMessage(1, 'Name is invalid');
    });

    it('negative | name empty', () => {
      cy.get(signupPage.nameField).click();
      signupPage.clickModalHeader();
      signupPage.checkErrorMessage(1, 'Name required');
    });

    it('negative | red border when invalid', () => {
      signupPage.typeName('`````');
      signupPage.clickModalHeader();
      cy.get(signupPage.nameField).should(
        'have.css',
        'border-color',
        'rgb(220, 53, 69)',
      );
      signupPage.checkErrorMessage(1, 'Name is invalid');
    });
  });

  context('Lastname', () => {
    it('positive | valid lastname', () => {
      cy.get(signupPage.lastNameField).type('Menok');
      signupPage.clickModalHeader();
      cy.get('.invalid-feedback > :nth-child(1)').should('not.exist');
    });

    it('negative | lastname less than 2', () => {
      cy.get(signupPage.lastNameField).type('1');
      signupPage.clickModalHeader();
      signupPage.checkErrorMessage(1, 'Last name is invalid');
      signupPage.checkErrorMessage(
        2,
        'Last name has to be from 2 to 20 characters long',
      );
    });

    it('negative | lastname more than 20', () => {
      cy.get(signupPage.lastNameField).type('123456789123456789123');
      signupPage.clickModalHeader();
      signupPage.checkErrorMessage(1, 'Last name is invalid');
      signupPage.checkErrorMessage(
        2,
        'Last name has to be from 2 to 20 characters long',
      );
    });

    it('negative | lastname is number', () => {
      cy.get(signupPage.lastNameField).type('121');
      signupPage.clickModalHeader();
      signupPage.checkErrorMessage(1, 'Last name is invalid');
    });

    it('negative | lastname empty', () => {
      cy.get(signupPage.lastNameField).click();
      signupPage.clickModalHeader();
      signupPage.checkErrorMessage(1, 'Last name required');
    });

    it('negative | red border when invalid', () => {
      cy.get(signupPage.lastNameField).type('`````');
      signupPage.clickModalHeader();
      cy.get(signupPage.lastNameField).should(
        'have.css',
        'border-color',
        'rgb(220, 53, 69)',
      );
      signupPage.checkErrorMessage(1, 'Last name is invalid');
    });
  });

  context('Email', () => {
    it('positive | valid email', () => {
      signupPage.typeEmail('olehmenok@gmail.com');
      signupPage.clickModalHeader();
      cy.get('.invalid-feedback > :nth-child(1)').should('not.exist');
    });

    it('negative | email without @', () => {
      signupPage.typeEmail('testgmail.com');
      signupPage.clickModalHeader();
      signupPage.checkErrorMessage(1, 'Email is incorrect');
    });

    it('negative | email empty', () => {
      cy.get(signupPage.emailField).click();
      signupPage.clickModalHeader();
      signupPage.checkErrorMessage(1, 'Email required');
    });

    it('negative | email has red border', () => {
      signupPage.typeEmail('verryloooooooooongstringgggggggggggggggggggggg');
      signupPage.clickModalHeader();
      cy.get(signupPage.emailField).should(
        'have.css',
        'border-color',
        'rgb(220, 53, 69)',
      );
      signupPage.checkErrorMessage(1, 'Email is incorrect');
    });
  });

  context('Password', () => {
    it('positive | valid password', () => {
      signupPage.typePassword('superSecret123');
      signupPage.clickModalHeader();
      cy.get('.invalid-feedback > :nth-child(1)').should('not.exist');
    });

    it('negative | too short password', () => {
      signupPage.typePassword('123');
      signupPage.clickModalHeader();
      signupPage.checkErrorMessage(
        1,
        'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter',
      );
    });

    it('negative | password empty', () => {
      cy.get(signupPage.passwordField).click();
      signupPage.clickModalHeader();
      signupPage.checkErrorMessage(1, 'Password required');
    });

    it('negative | password red border', () => {
      signupPage.typePassword('verryloooooooooongstringggggggggggggggggggg');
      signupPage.clickModalHeader();
      cy.get(signupPage.passwordField).should(
        'have.css',
        'border-color',
        'rgb(220, 53, 69)',
      );
      signupPage.checkErrorMessage(
        1,
        'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter',
      );
    });
  });

  context('Password re-enter', () => {
    it('positive | valid repeat password', () => {
      signupPage.typePassword('superSecret123');
      signupPage.typeRepeatPassword('superSecret123');
      signupPage.clickModalHeader();
      cy.get('.invalid-feedback > :nth-child(1)').should('not.exist');
    });

    it('negative | repeat password invalid', () => {
      signupPage.typePassword('superSecret123');
      signupPage.typeRepeatPassword('123');
      signupPage.clickModalHeader();
      signupPage.checkErrorMessage(
        1,
        'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter',
      );
    });

    it('negative | repeat password does not match', () => {
      signupPage.typePassword('superSecret123');
      signupPage.typeRepeatPassword('superSecret124');
      signupPage.clickModalHeader();
      signupPage.checkErrorMessage(1, 'Passwords do not match');
    });

    it('negative | repeat password empty', () => {
      signupPage.typePassword('superSecret123');
      cy.get(signupPage.repeatPasswordField).click();
      signupPage.clickModalHeader();
      signupPage.checkErrorMessage(1, 'Re-enter password required');
    });
  });
});
