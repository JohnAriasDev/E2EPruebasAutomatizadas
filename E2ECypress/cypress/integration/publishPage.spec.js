// <reference types="cypress" />
import LoginSelector from "../support/PageObjects/loginSelector";
import PostSelector from "../support/PageObjects/postSelector"
import { faker } from '@faker-js/faker';

describe("publish a page", () => {
    let data;
    const newPost = faker.commerce.productName();
    const loginSelector = new LoginSelector();
    const postSelector = new PostSelector();

  //@Given
  beforeEach(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.fixture('datos').then(function(dataR){
        data = dataR;
    });
    cy.visit("http://localhost:2368/ghost/");
  });
  //@When
  it("publish a page", () => {
    loginSelector.getEmailLogin().type(data.login.email);
    loginSelector.getPasswordLogin().type(data.login.password);
    loginSelector.getButtonLogin().click();
    postSelector.getPageOption().click();
    postSelector.getNewPageButton().click({force: true});
    postSelector.getTextAreaTitle().type(newPost);
    postSelector.getEditor().type(faker.lorem.paragraph());
    postSelector.getPublishDropdown().click();
    postSelector.getPublishButton().click();
    postSelector.getBackButton().click();
    cy.wait(5000);
    postSelector.getBackButton().click();
    cy.get('.gh-canvas-header-content' , { timeout: 20000 });
    cy.wait(3000)
    postSelector.getFilterOptions().first().click({force: true});
    postSelector.getFilterPublish().click({force: true});
    cy.wait(2000);
  //@Then
    postSelector.getTitleFirstElementTitlePages().should('be.visible').contains(newPost);

  });
});
