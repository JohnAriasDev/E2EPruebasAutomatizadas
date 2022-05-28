// <reference types="cypress" />
import LoginSelector from "../../support/PageObjects/loginSelector";
import PostSelector from "../../support/PageObjects/postSelector";
import { faker } from "@faker-js/faker";

describe("schedule a draft post with invalid date", () => {
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
  it("schedule a draft post with invalid date", () => {
    cy.visit(data.url3+data.dir);
    postSelector.getScreenShot(data.version3, data.scenarios.S10, index++);
    loginSelector.getEmailLogin().type(data.login.email);
    postSelector.getScreenShot(data.version3, data.scenarios.S10, index++);
    loginSelector.getPasswordLogin().type(data.login.password);
    postSelector.getScreenShot(data.version3, data.scenarios.S10, index++);
    loginSelector.getButtonLogin().click();
    postSelector.getScreenShot(data.version3, data.scenarios.S10, index++);
    postSelector.getNewPostButton().click();
    postSelector.getScreenShot(data.version3, data.scenarios.S10, index++);
    postSelector.getTextAreaTitle().type(newPost);
    postSelector.getScreenShot(data.version3, data.scenarios.S10, index++);
    postSelector.getParagraphInput().type(faker.lorem.paragraph());
    postSelector.getScreenShot(data.version3, data.scenarios.S10, index++);
    postSelector.getSettingsV3().click();
    postSelector.getScreenShot(data.version3, data.scenarios.S10, index++);
    postSelector.getInputDate().clear().type('2022-0'+faker.datatype.number({ min: 5, max: 7})+'-'+faker.datatype.number({ min: 26, max: 30})).blur();
    postSelector.getScreenShot(data.version3, data.scenarios.S10, index++);
    //@Then
    postSelector.getErrorInputTime().should('to.contain', 'Must be in the past')
  });
});
