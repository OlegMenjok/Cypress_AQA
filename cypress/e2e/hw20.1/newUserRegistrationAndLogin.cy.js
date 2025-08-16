import { getRandomNumber } from '../../utils/helpers';

describe('New user registration and login', () => {
  const emailAdress = `stress+${getRandomNumber(1, 10000)}@gmail.com`;
  beforeEach(() => {
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
  });

  it('check field name | positive | registration', () => {
    // Arrange
    cy.get('.hero-descriptor_btn').click();
    cy.get('#signupName').type('Stress');
    cy.get('.modal-footer > .btn').should('be.disabled');

    cy.get('#signupLastName').type('Test');
    cy.get('.modal-footer > .btn').should('be.disabled');

    cy.get('#signupEmail').type(emailAdress);
    cy.get('.modal-footer > .btn').should('be.disabled');

    cy.get('#signupPassword').type('superSecret123', { sensitive: true });
    cy.get('.modal-footer > .btn').should('be.disabled');

    cy.get('#signupRepeatPassword').type('superSecret123', { sensitive: true });
    cy.get('.modal-footer > .btn').should('not.be.disabled');

    // Act
    cy.get('.modal-footer > .btn').click();

    // Assert
    cy.get('.alert > p').should('have.text', 'Registration complete');
  });

  it('check field name | positive | login', () => {
    // Arrange
    cy.get('.header_right > .btn').click();
    cy.login();

    // Act
    cy.get('.modal-footer > .btn-primary').click();

    // Assert
    cy.get('.alert > p').should(
      'have.text',
      'You have been successfully logged in',
    );
  });
});
