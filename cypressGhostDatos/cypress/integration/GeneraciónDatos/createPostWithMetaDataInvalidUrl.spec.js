// <reference types="cypress" />
import LoginSelector from "../../support/PageObjects/loginSelector";
import PostSelector from "../../support/PageObjects/postSelector"
import { faker } from '@faker-js/faker';

describe("create a post with metadata", () => {
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
    cy.fixture('datos').then(function(dataR){
        data = dataR;
    });
  });
  //@When
  it("create a post with metadata", () => {
    cy.visit(data.url4+data.dir);
    loginSelector.getEmailLogin().type(data.login.email);
    loginSelector.getPasswordLogin().type(data.login.password);
    loginSelector.getButtonLogin().click();
    postSelector.getNewPostButton().click();
    postSelector.getUnplashImageButton().click();
    postSelector.getUnplashImageInsert().click();
    postSelector.getTextAreaTitle().type(newPost);
    postSelector.getParagraphInput().type(faker.lorem.paragraph());
    postSelector.getSettings().click();
    postSelector.getMetadataButton().click();
    postSelector.getMetadataTitle().type(newPost);
    postSelector.getMetadataDesc().type(faker.lorem.paragraph());
    postSelector.getUrlInput().type(faker.lorem.word());
    postSelector.getMetadataTitle().click()

  //@Then
    postSelector.getErrorUrlInput().should('to.contain','Please enter a valid URL');

  });
});
