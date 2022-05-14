// <reference types="cypress" />
import LoginSelector from "../../support/PageObjects/loginSelector";
import PostSelector from "../../support/PageObjects/postSelector";
import { faker } from "@faker-js/faker";

describe("delete the last post", () => {
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
  it("Delete the last post", () => {
    cy.visit(data.url4+data.dir);
    postSelector.getScreenShot(data.version, data.scenarios.S8, index++);
    loginSelector.getEmailLogin().type(data.login.email);
    postSelector.getScreenShot(data.version, data.scenarios.S8, index++);
    loginSelector.getPasswordLogin().type(data.login.password);
    postSelector.getScreenShot(data.version, data.scenarios.S8, index++);
    loginSelector.getButtonLogin().click();
    postSelector.getScreenShot(data.version, data.scenarios.S8, index++);
    postSelector.getNewPostButton().click();
    postSelector.getScreenShot(data.version, data.scenarios.S8, index++);
    postSelector.getTextAreaTitle().type(newPost);
    postSelector.getScreenShot(data.version, data.scenarios.S8, index++);
    postSelector.getParagraphInput().type(faker.lorem.paragraph());
    postSelector.getScreenShot(data.version, data.scenarios.S8, index++);
    postSelector.getBackButton().click();
    postSelector.getScreenShot(data.version, data.scenarios.S8, index++);
    postSelector.getTable().its('length').as('initialCount');
    postSelector.getScreenShot(data.version, data.scenarios.S8, index++);
    postSelector.getFirstElementTable().first().click();
    postSelector.getScreenShot(data.version, data.scenarios.S8, index++);
    postSelector.getSettings().click();
    postSelector.getScreenShot(data.version, data.scenarios.S8, index++);
    postSelector.getDeleteButton().click();
    postSelector.getScreenShot(data.version, data.scenarios.S8, index++);
    postSelector.getDeleteButtonConfirm().click();
    postSelector.getScreenShot(data.version, data.scenarios.S8, index++);
    postSelector.getTable().its('length').as('nextCount');
    //@Then
    cy.get('@initialCount').then(initial => {
      cy.get('@nextCount'). then(next => {
        expect(initial-1).to.eq(next)
      })
    });
  });
});
