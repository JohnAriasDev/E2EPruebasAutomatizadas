// <reference types="cypress" />
import LoginSelector from "../support/PageObjects/loginSelector";
import PostSelector from "../support/PageObjects/postSelector";
import { faker } from "@faker-js/faker";

describe("delete the last post", () => {
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
  it("Delete the last post", () => {
    loginSelector.getEmailLogin().type(data.login.email);
    loginSelector.getPasswordLogin().type(data.login.password);
    loginSelector.getButtonLogin().click();
    postSelector.getNewPostButton().click();
    postSelector.getTextAreaTitle().type(newPost);
    postSelector.getParagraphInput().type(faker.lorem.paragraph());
    postSelector.getBackButton().click();
    postSelector.getTable().its('length').as('initialCount');
    postSelector.getFirstElementTable().first().click();
    postSelector.getSettings().click();
    postSelector.getDeleteButton().click();
    postSelector.getDeleteButtonConfirm().click();
    postSelector.getTable().its('length').as('nextCount')
    //@Then
    cy.get('@initialCount').then(initial => {
      cy.get('@nextCount'). then(next => {
        expect(initial-1).to.eq(next)
      })
    });
  });
});
