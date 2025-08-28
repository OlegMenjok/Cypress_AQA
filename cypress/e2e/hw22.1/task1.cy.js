import { addCar } from '../hw21.1/pomCar';
import { signupPage } from '../hw20.1/pomSignInPage';

describe('Car', () => {
  let carId = 0;

  beforeEach(() => {
    cy.visit('/');
  });

  it('Create new car | check carId by intercept', () => {
    // Arrange
    cy.get(signupPage.loginButton).click();
    cy.login();
    addCar.clickSubmitButton();
    cy.intercept('POST', '/api/cars').as('cars');

    // create new car
    addCar.clickAddCarButton();
    addCar.chooseCarBrand('Ford');
    addCar.typeCarMillage('254781');
    addCar.clickSubmitButton();

    cy.wait('@cars').then((interception) => {
      expect(interception.response.statusCode).to.eq(201);
      console.log(interception.response.body.data.id);
      carId = interception.response.body.data.id;
    });

    cy.request(`/api/cars`).then((res2) => {
      expect(res2.status).to.eq(200);
      console.log('res2', res2.body.data);

      expect(res2.body.data[0].id).to.eq(carId);
    });
  });

  it('Autorize into system | add expense via api', () => {
    // Arrange
     cy.request('POST', '/api/auth/signin', {
      email: Cypress.env('email'),
      password: Cypress.env('password'),
      remember: true,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });

    cy.request('POST', '/api/expenses', {
      carId,
      reportedAt: '2025-08-28',
      mileage: 999999,
      liters: 11,
      totalCost: 11,
      forceMileage: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('status', 'ok');
    });
  });
});
