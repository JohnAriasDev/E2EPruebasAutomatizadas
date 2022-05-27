// <reference types="cypress" />
import LoginSelector from "../../support/PageObjects/loginSelector";
import PostSelector from "../../support/PageObjects/postSelector";
import { faker } from "@faker-js/faker";

describe("schedule a draft post", () => {
  let data;
  const newPost = faker.commerce.productName();
  const loginSelector = new LoginSelector();
  const postSelector = new PostSelector();
  let index = 0;

  //@Given
  beforeEach(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.fixture("datos").then(function (dataR) {
      data = dataR;
    });
  });
  //@When
  it("schedule a draft post", () => {
    cy.visit(data.url4+data.dir);
    loginSelector.getEmailLogin().type(data.login.email);
    loginSelector.getPasswordLogin().type(faker.lorem.word());
    loginSelector.getButtonLogin().click();
    
    //@Then
    loginSelector.getButtonLogin().children('span').should('to.contain', 'Retry');
    loginSelector.getErrorMessage().should('to.contain', 'Your password is incorrect.')
  });
});
