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
  });
  //@When
  it("publish a page", () => {
    cy.visit(data.url+data.dir);
    loginSelector.getEmailLogin().type(data.login.email);
    loginSelector.getPasswordLogin().type(data.login.password);
    loginSelector.getButtonLogin().click();
    postSelector.getPageOption().click();
    postSelector.getNewPageButton().click({force: true});
    postSelector.getTextAreaTitle().type(newPost);
    postSelector.getEditor().type(faker.lorem.paragraph());
    postSelector.getPublishDropdown().click();
    postSelector.getPublishButton().click();
    postSelector.getPublishButton().children('span').should('to.contain', "Update");
    postSelector.getBackButton().click();
    postSelector.waitForList();
    postSelector.getFilterOptions().first().click({force: true});
    postSelector.getFilterPublish().click({force: true});
    postSelector.waitForList();
  //@Then
    postSelector.getTitleFirstElementPages().should('to.contain',newPost);

  });
});
