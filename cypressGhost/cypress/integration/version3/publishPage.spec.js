// <reference types="cypress" />
import LoginSelector from "../../support/PageObjects/loginSelector";
import PostSelector from "../../support/PageObjects/postSelector"
import { faker } from '@faker-js/faker';

describe("publish a page", () => {
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
  it("publish a page", () => {
    cy.visit(data.url3+data.dir);
    postSelector.getScreenShot(data.version3, data.scenarios.S11, index++);
    loginSelector.getEmailLogin().type(data.login.email);
    postSelector.getScreenShot(data.version3, data.scenarios.S11, index++);
    loginSelector.getPasswordLogin().type(data.login.password);
    postSelector.getScreenShot(data.version3, data.scenarios.S11, index++);
    loginSelector.getButtonLogin().click();
    postSelector.getScreenShot(data.version3, data.scenarios.S11, index++);
    postSelector.getPageOption().click();
    postSelector.getScreenShot(data.version3, data.scenarios.S11, index++);
    postSelector.getNewPageButton().click({force: true});
    postSelector.getScreenShot(data.version3, data.scenarios.S11, index++);
    postSelector.getTextAreaTitle().type(newPost);
    postSelector.getScreenShot(data.version3, data.scenarios.S11, index++);
    postSelector.getEditor().type(faker.lorem.paragraph());
    postSelector.getScreenShot(data.version3, data.scenarios.S11, index++);
    postSelector.getPublishDropdown().click();
    postSelector.getScreenShot(data.version3, data.scenarios.S11, index++);
    postSelector.getPublishButton().click();
    postSelector.getScreenShot(data.version3, data.scenarios.S11, index++);
    postSelector.getPublishButton().children('span').should('to.contain', "Update");
    postSelector.getScreenShot(data.version3, data.scenarios.S11, index++);
    postSelector.getBackButton().click();
    postSelector.waitForList();
    postSelector.getScreenShot(data.version3, data.scenarios.S11, index++);
    postSelector.getFilterOptions().first().click({force: true});
    postSelector.getScreenShot(data.version3, data.scenarios.S11, index++);
    postSelector.getFilterPublish().click({force: true});
    postSelector.waitForList();
    postSelector.getScreenShot(data.version3, data.scenarios.S11, index++);
    
  //@Then
    postSelector.getTitleFirstElementPages().should('to.contain',newPost);

  });
});
