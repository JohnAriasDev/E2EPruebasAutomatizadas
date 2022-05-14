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
    cy.visit(data.url3+data.dir);
    postSelector.getScreenShot(data.version3, data.scenarios.S5, index++);
    loginSelector.getEmailLogin().type(data.login.email);
    postSelector.getScreenShot(data.version3, data.scenarios.S5, index++);
    loginSelector.getPasswordLogin().type(data.login.password);
    postSelector.getScreenShot(data.version3, data.scenarios.S5, index++);
    loginSelector.getButtonLogin().click();
    postSelector.getScreenShot(data.version3, data.scenarios.S5, index++);
    postSelector.getNewPostButton().click();
    postSelector.getScreenShot(data.version3, data.scenarios.S5, index++);
    postSelector.getUnplashImageButton().click();
    postSelector.getScreenShot(data.version3, data.scenarios.S5, index++);
    postSelector.getUnplashImageInsert().click();
    postSelector.getScreenShot(data.version3, data.scenarios.S5, index++);
    postSelector.getTextAreaTitle().type(newPost);
    postSelector.getScreenShot(data.version3, data.scenarios.S5, index++);
    postSelector.getParagraphInput().type(faker.lorem.paragraph());
    postSelector.getScreenShot(data.version3, data.scenarios.S5, index++);
    postSelector.getSettings().click();
    postSelector.getScreenShot(data.version3, data.scenarios.S5, index++);
    postSelector.getMetadataButton().click();
    postSelector.getScreenShot(data.version3, data.scenarios.S5, index++);
    postSelector.getMetadataTitle().type(newPost);
    postSelector.getScreenShot(data.version3, data.scenarios.S5, index++);
    postSelector.getMetadataDesc().type(faker.lorem.paragraph());
    postSelector.getScreenShot(data.version3, data.scenarios.S5, index++);
    postSelector.getBackButton().click();
    postSelector.getScreenShot(data.version3, data.scenarios.S5, index++);
    postSelector.getDrafOption().click();
    postSelector.getScreenShot(data.version3, data.scenarios.S5, index++);
  //@Then
    postSelector.getTitleFirstElementTitle().should('to.contain',newPost);

  });
});
