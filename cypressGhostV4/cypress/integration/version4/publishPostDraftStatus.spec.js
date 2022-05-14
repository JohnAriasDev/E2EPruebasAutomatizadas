// <reference types="cypress" />
import LoginSelector from "../../support/PageObjects/loginSelector";
import PostSelector from "../../support/PageObjects/postSelector";
import { faker } from "@faker-js/faker";

describe("publish draft post", () => {
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
  it("publish draft post", () => {
    cy.visit(data.url4+data.dir);
    postSelector.getScreenShot(data.version, data.scenarios.S2, index++);
    loginSelector.getEmailLogin().type(data.login.email);
    postSelector.getScreenShot(data.version, data.scenarios.S2, index++);
    loginSelector.getPasswordLogin().type(data.login.password);
    postSelector.getScreenShot(data.version, data.scenarios.S2, index++);
    loginSelector.getButtonLogin().click();
    postSelector.getScreenShot(data.version, data.scenarios.S2, index++);
    postSelector.getNewPostButton().click();
    postSelector.getScreenShot(data.version, data.scenarios.S2, index++);
    postSelector.getTextAreaTitle().type(newPost);
    postSelector.getScreenShot(data.version, data.scenarios.S2, index++);
    postSelector.getParagraphInput().type(faker.lorem.paragraph());
    postSelector.getScreenShot(data.version, data.scenarios.S2, index++);
    postSelector.getBackButton().click();
    postSelector.getScreenShot(data.version, data.scenarios.S2, index++);
    postSelector.getDrafOption().click();
    postSelector.getScreenShot(data.version, data.scenarios.S2, index++);
    postSelector.getFirstElementTable().first().click();
    postSelector.getScreenShot(data.version, data.scenarios.S2, index++);
    postSelector.getPublishDropdown().click();
    postSelector.getScreenShot(data.version, data.scenarios.S2, index++);
    postSelector.getPublishButton().click();
    postSelector.getScreenShot(data.version, data.scenarios.S2, index++);
    postSelector.getPublishButtonConfirm().click();
    postSelector.getScreenShot(data.version, data.scenarios.S2, index++);
    postSelector.getPublishButtonConfirm().should('not.exist');
    postSelector.getScreenShot(data.version, data.scenarios.S2, index++);
    postSelector.getBackButton().click();
    postSelector.getScreenShot(data.version, data.scenarios.S2, index++);
    postSelector.getPublishOption().click();
    postSelector.getScreenShot(data.version, data.scenarios.S2, index++);

    //@Then
    postSelector.getTitleFirstElementTitle().should('to.contain', newPost);
  });
});
