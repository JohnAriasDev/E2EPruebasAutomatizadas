// <reference types="cypress" />
import LoginSelector from "../../support/PageObjects/loginSelector";
import PostSelector from "../../support/PageObjects/postSelector";
import { faker } from "@faker-js/faker";

describe("schedule a draft post with invalid time", () => {
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
  it("schedule a draft post with invalid time", () => {
    cy.visit(data.url4+data.dir);
    postSelector.getScreenShot(data.version4, data.scenarios.S11, index++);
    loginSelector.getEmailLogin().type(data.login.email);
    postSelector.getScreenShot(data.version4, data.scenarios.S11, index++);
    loginSelector.getPasswordLogin().type(data.login.password);
    postSelector.getScreenShot(data.version4, data.scenarios.S11, index++);
    loginSelector.getButtonLogin().click();
    postSelector.getScreenShot(data.version4, data.scenarios.S11, index++);
    postSelector.getNewPostButton().click();
    postSelector.getScreenShot(data.version4, data.scenarios.S11, index++);
    postSelector.getTextAreaTitle().type(newPost);
    postSelector.getScreenShot(data.version4, data.scenarios.S11, index++);
    postSelector.getParagraphInput().type(faker.lorem.paragraph());
    postSelector.getScreenShot(data.version4, data.scenarios.S11, index++);
    postSelector.getSettings().click();
    postSelector.getScreenShot(data.version4, data.scenarios.S11, index++);
    postSelector.getInputTime().clear().type(faker.datatype.number({ min: 24, max: 60})+':'+faker.datatype.number({ min: 61, max: 99})).blur();
    postSelector.getScreenShot(data.version3, data.scenarios.S11, index++);
    //@Then    
    postSelector.getErrorInputTime().should('to.contain', 'Must be in format: "15:00"')
  });
});
