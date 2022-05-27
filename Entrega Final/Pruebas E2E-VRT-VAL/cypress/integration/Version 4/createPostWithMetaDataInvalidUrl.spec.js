// <reference types="cypress" />
import LoginSelector from "../../support/PageObjects/loginSelector";
import PostSelector from "../../support/PageObjects/postSelector"
import { faker } from '@faker-js/faker';

describe("create a post with metadata invalid URL", () => {
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
  it("create a post with metadata invalid URL", () => {
    cy.visit(data.url4+data.dir);
    postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    loginSelector.getEmailLogin().type(data.login.email);
    postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    loginSelector.getPasswordLogin().type(data.login.password);
    postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    loginSelector.getButtonLogin().click();
    postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    postSelector.getNewPostButton().click();
    postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    postSelector.getTextAreaTitle().type(newPost);
    postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    postSelector.getParagraphInput().type(faker.lorem.paragraph());
    postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    postSelector.getSettingsV3().click();
    postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    postSelector.getMetadataButton().click();
    postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    postSelector.getMetadataTitle().type(newPost);
    postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    postSelector.getMetadataDesc().type(faker.lorem.paragraph());
    postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    postSelector.getUrlInput().type(faker.lorem.word());
    postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    postSelector.getMetadataTitle().click()
    postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
  //@Then
    postSelector.getErrorUrlInput().should('to.contain','Please enter a valid URL');

  });
});
