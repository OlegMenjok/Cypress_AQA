import { addCar } from '../hw21.1/pomCar';
import { signupPage } from '../hw20.1/pomSignInPage';

describe('Car', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Create new car | add expense | success', () => {
    // Arrange
    cy.get(signupPage.loginButton).click();
    cy.login();
    addCar.clickSubmitButton();

    // create new car
    addCar.clickAddCarButton();
    addCar.chooseCarBrand('BMW');
    addCar.typeCarMillage('254781');
    addCar.clickSubmitButton();

    // add fuel expense
    addCar.clickFuelExpenseTab();
    addCar.clickAddExpense();
    addCar.typeExpenseLiters('168');
    addCar.typeExpenseTotalCost('50');
    addCar.clearAndTypeCarMillage('254790');

    // Act
    addCar.clickSubmitButton();

    // Assert
    signupPage.checkSuccessMessage('Fuel expense added');
  });
});
