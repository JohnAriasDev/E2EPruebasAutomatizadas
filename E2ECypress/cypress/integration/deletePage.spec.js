// <reference types="cypress" />
import LoginSelector from "../support/PageObjects/loginSelector";
import PostSelector from "../support/PageObjects/postSelector";
import { faker } from "@faker-js/faker";

describe("delete a page", () => {
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
  it("delete a page", () => {
    loginSelector.getEmailLogin().type(data.login.email);
    loginSelector.getPasswordLogin().type(data.login.password);
    loginSelector.getButtonLogin().click();
    postSelector.getPageOption().click();
    postSelector.getNewPageButton().click({ force: true });
    postSelector.getTextAreaTitle().type(newPost);
    postSelector.getEditor().type(faker.lorem.paragraph());
    postSelector.getBackButton().click();
    cy.get('.gh-canvas-header-content' , { timeout: 20000 });
    cy.wait(3000)
    postSelector.getTablePage().its("length").as("initialCount");
    postSelector.getFirstElementPages().click({force: true});
    postSelector.getSettings().click();
    postSelector.getDeleteButton().click();
    postSelector.getDeleteButtonConfirm().click();
    cy.get('.gh-canvas-header-content' , { timeout: 20000 });
    cy.wait(3000)
    postSelector.getTablePage().its("length").as("nextCount");
    //@Then
    cy.get("@initialCount").then((initial) => {
      cy.get("@nextCount").then((next) => {
        expect(initial - 1).to.eq(next);
      });
    });
  });
});
