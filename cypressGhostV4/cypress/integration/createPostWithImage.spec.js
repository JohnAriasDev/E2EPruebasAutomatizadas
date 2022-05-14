// <reference types="cypress" />
import LoginSelector from "../support/PageObjects/loginSelector";
import PostSelector from "../support/PageObjects/postSelector"
import { faker } from '@faker-js/faker';

describe("create a post with image", () => {
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
  it("create a post with image", () => {
    cy.visit(data.url+data.dir);
    postSelector.getScreenShot(data.version, data.scenarios.S4, index++);
    loginSelector.getEmailLogin().type(data.login.email);
    postSelector.getScreenShot(data.version, data.scenarios.S4, index++);
    loginSelector.getPasswordLogin().type(data.login.password);
    postSelector.getScreenShot(data.version, data.scenarios.S4, index++);
    loginSelector.getButtonLogin().click();
    postSelector.getScreenShot(data.version, data.scenarios.S4, index++);
    postSelector.getNewPostButton().click();
    postSelector.getScreenShot(data.version, data.scenarios.S4, index++);
    postSelector.getUnplashImageButton().click();
    postSelector.getScreenShot(data.version, data.scenarios.S4, index++);
    postSelector.getUnplashImageInsert().click();
    postSelector.getScreenShot(data.version, data.scenarios.S4, index++);
    postSelector.getTextAreaTitle().type(newPost);
    postSelector.getScreenShot(data.version, data.scenarios.S4, index++);
    postSelector.getParagraphInput().type(faker.lorem.paragraph());
    postSelector.getScreenShot(data.version, data.scenarios.S4, index++);
    postSelector.getBackButton().click();
    postSelector.getScreenShot(data.version, data.scenarios.S4, index++);
    postSelector.getDrafOption().click();
    postSelector.getScreenShot(data.version, data.scenarios.S4, index++);
  //@Then
    postSelector.getTitleFirstElementTitle().should('to.contain',newPost);

  });
});
