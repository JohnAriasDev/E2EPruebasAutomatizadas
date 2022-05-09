// <reference types="cypress" />
import LoginSelector from "../support/PageObjects/loginSelector";
import PostSelector from "../support/PageObjects/postSelector";
import { faker } from "@faker-js/faker";

describe("publish draft post", () => {
  let data;
  const newPost = faker.commerce.productName();
  const loginSelector = new LoginSelector();
  const postSelector = new PostSelector();

  //@Given
  beforeEach(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.fixture("datos").then(function (dataR) {
      data = dataR;
    });
    cy.visit("http://localhost:2368/ghost/");
  });
  //@When
  it("publish draft post", () => {
    loginSelector.getEmailLogin().type(data.login.email);
    loginSelector.getPasswordLogin().type(data.login.password);
    loginSelector.getButtonLogin().click();
    postSelector.getNewPostButton().click();
    postSelector.getTextAreaTitle().type(newPost);
    postSelector.getParagraphInput().type(faker.lorem.paragraph());
    postSelector.getBackButton().click();
    postSelector.getDrafOption().click();
    postSelector.getFirstElementTable().first().click();
    postSelector.getPublishDropdown().click();
    postSelector.getPublishButton().click();
    postSelector.getPublishButtonConfirm().click();
    postSelector.getPublishButtonConfirm().should('not.exist');
    postSelector.getBackButton().click();
    postSelector.getPublishOption().click();

    //@Then
    postSelector.getTitleFirstElementTitle().contains(newPost);
  });
});
