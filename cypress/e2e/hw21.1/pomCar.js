class AddCar {
  mainAddCarButton = '.panel-page_heading > .btn';
  submitButton = '.modal-footer > .btn-primary';
  carBrand = '#addCarBrand';
  carMillage = '#addCarMileage';
  fuelExpenseTab = '[routerlink="expenses"]';
  addExpense = '.btn-primary';
  addExpenseLiters = '#addExpenseLiters';
  addExpenseTotalCost = '#addExpenseTotalCost';
  addExpenseMileage = '#addExpenseMileage';

  clickSubmitButton() {
    cy.get(this.submitButton).click();
  }

  clickAddCarButton() {
    cy.get(this.mainAddCarButton).click();
  }

  chooseCarBrand(brand) {
    cy.get(this.carBrand).select(brand);
  }

  typeCarMillage(millage) {
    cy.get(this.carMillage).type(millage);
  }

  clickFuelExpenseTab() {
    cy.get(this.fuelExpenseTab).click();
  }

  clickAddExpense() {
    cy.get(this.addExpense).click();
  }

  typeExpenseLiters(litters) {
    cy.get(this.addExpenseLiters).type(litters);
  }

  typeExpenseTotalCost(cost) {
    cy.get(this.addExpenseTotalCost).type(cost);
  }

  clearAndTypeCarMillage(millage) {
    cy.get(this.addExpenseMileage).clear().type(millage);
  }
  
  checkSuccessMessage(text) {
    cy.get(this.successMessage).should('have.text', text);
  }
}

export const addCar = new AddCar();
