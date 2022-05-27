// <reference types="cypress" />
import LoginSelector from "../../support/PageObjects/loginSelector";
import PostSelector from "../../support/PageObjects/postSelector"
import { faker } from '@faker-js/faker';

describe("create a post with invalid excerpt", () => {
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
  it("create a post with invalid excerpt", () => {
    cy.visit(data.url3+data.dir);
    postSelector.getScreenShot(data.version3, data.scenarios.S4, index++);
    loginSelector.getEmailLogin().type(data.login.email);
    postSelector.getScreenShot(data.version3, data.scenarios.S4, index++);
    loginSelector.getPasswordLogin().type(data.login.password);
    postSelector.getScreenShot(data.version3, data.scenarios.S4, index++);
    loginSelector.getButtonLogin().click();
    postSelector.getScreenShot(data.version3, data.scenarios.S4, index++);
    postSelector.getNewPostButton().click();
    postSelector.getScreenShot(data.version3, data.scenarios.S4, index++);
    postSelector.getTextAreaTitle().type(newPost);
    postSelector.getScreenShot(data.version3, data.scenarios.S4, index++);
    postSelector.getParagraphInput().type(faker.lorem.paragraph());
    postSelector.getScreenShot(data.version3, data.scenarios.S4, index++);
    postSelector.getSettingsV3().click();
    postSelector.getScreenShot(data.version3, data.scenarios.S4, index++);
    postSelector.getInputExcerpt().type(faker.lorem.paragraphs(5).substring(0, 301)).blur();
    postSelector.getScreenShot(data.version3, data.scenarios.S4, index++);
  //@Then
    postSelector.getErrorInputExcerpt().should('to.contain','Excerpt cannot be longer than 300 characters.');

  });
});
