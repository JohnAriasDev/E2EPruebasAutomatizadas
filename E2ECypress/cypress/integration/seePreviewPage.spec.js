// <reference types="cypress" />
import LoginSelector from "../support/PageObjects/loginSelector";
import PostSelector from "../support/PageObjects/postSelector"
import { faker } from '@faker-js/faker';

describe("see preview page", () => {
    let data;
    const newPost = faker.commerce.productName();
    const loginSelector = new LoginSelector();
    const postSelector = new PostSelector();

    const getIframeDocument = () => {
      return cy
      .get('iframe.gh-pe-iframe')
      .its('0.contentDocument').should('exist')
    }
    
    const getIframeBody = () => {
      return getIframeDocument()
      .its('body').should('not.be.undefined')
      .then(cy.wrap)
    }

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
  it("see preview page", () => {
    loginSelector.getEmailLogin().type(data.login.email);
    loginSelector.getPasswordLogin().type(data.login.password);
    loginSelector.getButtonLogin().click();
    postSelector.getPageOption().click();
    postSelector.getNewPageButton().click({force: true});
    postSelector.getTextAreaTitle().type(newPost);
    postSelector.getEditor().type(faker.lorem.paragraph());
    postSelector.getPreview().click();
    cy.wait(10000);
  //@Then
    getIframeBody().find('h1.article-title').contains(newPost);

  });
});
