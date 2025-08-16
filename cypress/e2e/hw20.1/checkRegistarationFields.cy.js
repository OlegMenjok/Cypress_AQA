describe('Check registration fields', () => {
  beforeEach(() => {
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
    cy.get('.hero-descriptor_btn').click();
  });

  context('Name', () => {
    it('check field name | positive | valid name', () => {
      // Act
      cy.get('#signupName').type('Oleh');

      // Assert
      cy.get(
        'body > ngb-modal-window > div > div > app-signup-modal > div.modal-header',
      ).click();
      cy.get('.invalid-feedback > :nth-child(1)').should('not.exist');
    });

    it('check field name | negative | name is number and less than 2', () => {
      // Act
      cy.get('#signupName').type('1');

      // Assert
      cy.get(
        'body > ngb-modal-window > div > div > app-signup-modal > div.modal-header',
      ).click();
      cy.get('.invalid-feedback > :nth-child(1)').should(
        'have.text',
        'Name is invalid',
      );
      cy.get('.invalid-feedback > :nth-child(2)').should(
        'have.text',
        'Name has to be from 2 to 20 characters long',
      );
    });

    it('check field name | negative | name is number and more than 20', () => {
      // Act
      cy.get('#signupName').type('123456789123456789123');

      // Assert
      cy.get(
        'body > ngb-modal-window > div > div > app-signup-modal > div.modal-header',
      ).click();
      cy.get('.invalid-feedback > :nth-child(1)').should(
        'have.text',
        'Name is invalid',
      );
      cy.get('.invalid-feedback > :nth-child(2)').should(
        'have.text',
        'Name has to be from 2 to 20 characters long',
      );
    });

    it('check field name | negative | name is number', () => {
      // Act
      cy.get('#signupName').type('121');

      // Assert
      cy.get(
        'body > ngb-modal-window > div > div > app-signup-modal > div.modal-header',
      ).click();
      cy.get('.invalid-feedback > :nth-child(1)').should(
        'have.text',
        'Name is invalid',
      );
    });

    it('check field name | negative | name empty', () => {
      // Act
      cy.get('#signupName').click();

      // Assert
      cy.get(
        'body > ngb-modal-window > div > div > app-signup-modal > div.modal-header',
      ).click();
      cy.get('.invalid-feedback > :nth-child(1)').should(
        'have.text',
        'Name required',
      );
    });

    it('check field name | negative | name has borber color red', () => {
      // Act
      cy.get('#signupName').type('`````');

      // Assert
      cy.get(
        'body > ngb-modal-window > div > div > app-signup-modal > div.modal-header',
      ).click();
      cy.get('#signupName').should(
        'have.css',
        'border-color',
        'rgb(220, 53, 69)',
      );
      cy.get('.invalid-feedback > :nth-child(1)').should(
        'have.text',
        'Name is invalid',
      );
    });
  });

  context('Lastname', () => {
    it('check field lastname | positive | valid lastname', () => {
      // Act
      cy.get('#signupLastName').type('Menok');

      // Assert
      cy.get(
        'body > ngb-modal-window > div > div > app-signup-modal > div.modal-header',
      ).click();
      cy.get('.invalid-feedback > :nth-child(1)').should('not.exist');
    });

    it('check field lastname | negative | lastname is number and less than 2', () => {
      // Act
      cy.get('#signupLastName').type('1');

      // Assert
      cy.get(
        'body > ngb-modal-window > div > div > app-signup-modal > div.modal-header',
      ).click();
      cy.get('.invalid-feedback > :nth-child(1)').should(
        'have.text',
        'Last name is invalid',
      );
      cy.get('.invalid-feedback > :nth-child(2)').should(
        'have.text',
        'Last name has to be from 2 to 20 characters long',
      );
    });

    it('check field lastname | negative | lastname is number and more than 20', () => {
      // Act
      cy.get('#signupLastName').type('123456789123456789123');

      // Assert
      cy.get(
        'body > ngb-modal-window > div > div > app-signup-modal > div.modal-header',
      ).click();
      cy.get('.invalid-feedback > :nth-child(1)').should(
        'have.text',
        'Last name is invalid',
      );
      cy.get('.invalid-feedback > :nth-child(2)').should(
        'have.text',
        'Last name has to be from 2 to 20 characters long',
      );
    });

    it('check field lastname | negative | lastname is number', () => {
      // Act
      cy.get('#signupLastName').type('121');

      // Assert
      cy.get(
        'body > ngb-modal-window > div > div > app-signup-modal > div.modal-header',
      ).click();
      cy.get('.invalid-feedback > :nth-child(1)').should(
        'have.text',
        'Last name is invalid',
      );
    });

    it('check field lastname | negative | lastname empty', () => {
      // Act
      cy.get('#signupLastName').click();

      // Assert
      cy.get(
        'body > ngb-modal-window > div > div > app-signup-modal > div.modal-header',
      ).click();
      cy.get('.invalid-feedback > :nth-child(1)').should(
        'have.text',
        'Last name required',
      );
    });

    it('check field lastname | negative | lastname has borber color red', () => {
      // Act
      cy.get('#signupLastName').type('`````');

      // Assert
      cy.get(
        'body > ngb-modal-window > div > div > app-signup-modal > div.modal-header',
      ).click();
      cy.get('#signupLastName').should(
        'have.css',
        'border-color',
        'rgb(220, 53, 69)',
      );
      cy.get('.invalid-feedback > :nth-child(1)').should(
        'have.text',
        'Last name is invalid',
      );
    });
  });

  context('Email', () => {
    it('check field email | positive | valid email', () => {
      // Act
      cy.get('#signupEmail').type('olehmenok@gmail.com');

      // Assert
      cy.get(
        'body > ngb-modal-window > div > div > app-signup-modal > div.modal-header',
      ).click();
      cy.get('.invalid-feedback > :nth-child(1)').should('not.exist');
    });

    it('check field email | negative | email without ravlyka', () => {
      // Act
      cy.get('#signupEmail').type('testgmail.com');

      // Assert
      cy.get(
        'body > ngb-modal-window > div > div > app-signup-modal > div.modal-header',
      ).click();
      cy.get('.invalid-feedback > :nth-child(1)').should(
        'have.text',
        'Email is incorrect',
      );
    });

    it('check field email | negative | email empty', () => {
      // Act
      cy.get('#signupEmail').click();

      // Assert
      cy.get(
        'body > ngb-modal-window > div > div > app-signup-modal > div.modal-header',
      ).click();
      cy.get('.invalid-feedback > :nth-child(1)').should(
        'have.text',
        'Email required',
      );
    });

    it('check field email | negative | email has borber color red', () => {
      // Act
      cy.get('#signupEmail').type(
        'verryloooooooooongstringggggggggggggggggggggggggggggggggggggg',
      );

      // Assert
      cy.get(
        'body > ngb-modal-window > div > div > app-signup-modal > div.modal-header',
      ).click();
      cy.get('#signupEmail').should(
        'have.css',
        'border-color',
        'rgb(220, 53, 69)',
      );
      cy.get('.invalid-feedback > :nth-child(1)').should(
        'have.text',
        'Email is incorrect',
      );
    });
  });

  context('Password', () => {
    it('check field password | positive | valid password', () => {
      // Act
      cy.get('#signupPassword').type('superSecret123', { sensitive: true });

      // Assert
      cy.get(
        'body > ngb-modal-window > div > div > app-signup-modal > div.modal-header',
      ).click();
      cy.get('.invalid-feedback > :nth-child(1)').should('not.exist');
    });

    it('check field password | negative | password without validation', () => {
      // Act
      cy.get('#signupPassword').type('123', { sensitive: true });

      // Assert
      cy.get(
        'body > ngb-modal-window > div > div > app-signup-modal > div.modal-header',
      ).click();
      cy.get('.invalid-feedback > :nth-child(1)').should(
        'have.text',
        'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter',
      );
    });

    it('check field password | negative | password empty', () => {
      // Act
      cy.get('#signupPassword').click();

      // Assert
      cy.get(
        'body > ngb-modal-window > div > div > app-signup-modal > div.modal-header',
      ).click();
      cy.get('.invalid-feedback > :nth-child(1)').should(
        'have.text',
        'Password required',
      );
    });

    it('check field password | negative | password has borber color red', () => {
      // Act
      cy.get('#signupPassword').type(
        'verryloooooooooongstringggggggggggggggggggggggggggggggggggggg',
      );

      // Assert
      cy.get(
        'body > ngb-modal-window > div > div > app-signup-modal > div.modal-header',
      ).click();
      cy.get('#signupPassword').should(
        'have.css',
        'border-color',
        'rgb(220, 53, 69)',
      );
      cy.get('.invalid-feedback > :nth-child(1)').should(
        'have.text',
        'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter',
      );
    });
  });

  context('Password re-enter', () => {
    it('check field password re-enter | positive | valid re-enter password', () => {
      // Arrange
      cy.get('#signupPassword').type('superSecret123', { sensitive: true });

      // Act
      cy.get('#signupRepeatPassword').type('superSecret123', {
        sensitive: true,
      });

      // Assert
      cy.get(
        'body > ngb-modal-window > div > div > app-signup-modal > div.modal-header',
      ).click();
      cy.get('.invalid-feedback > :nth-child(1)').should('not.exist');
    });

    it('check field password | negative | invalid re-enter password', () => {
      // Arrange
      cy.get('#signupPassword').type('superSecret123', { sensitive: true });

      // Act
      cy.get('#signupRepeatPassword').type('123', { sensitive: true });

      // Assert
      cy.get(
        'body > ngb-modal-window > div > div > app-signup-modal > div.modal-header',
      ).click();
      cy.get('.invalid-feedback > :nth-child(1)').should(
        'have.text',
        'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter',
      );
    });

    it('check field password | negative | valid re-enter password but dont match', () => {
      // Arrange
      cy.get('#signupPassword').type('superSecret123', { sensitive: true });

      // Act
      cy.get('#signupRepeatPassword').type('superSecret124', {
        sensitive: true,
      });

      // Assert
      cy.get(
        'body > ngb-modal-window > div > div > app-signup-modal > div.modal-header',
      ).click();
      cy.get('.invalid-feedback > :nth-child(1)').should(
        'have.text',
        'Passwords do not match',
      );
    });

    it('check field password | negative | re-enter password has borber color red if it empty', () => {
      // Arrange
      cy.get('#signupPassword').type('superSecret123', { sensitive: true });

      // Act
      cy.get('#signupRepeatPassword').click();

      // Assert
      cy.get(
        'body > ngb-modal-window > div > div > app-signup-modal > div.modal-header',
      ).click();
      cy.get('.invalid-feedback > :nth-child(1)').should(
        'have.text',
        'Re-enter password required',
      );
    });
  });
});
