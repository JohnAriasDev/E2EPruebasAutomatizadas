// <reference types="cypress" />
import LoginSelector from "../../support/PageObjects/loginSelector";
import PostSelector from "../../support/PageObjects/postSelector"
import { faker } from '@faker-js/faker';

describe("create a page", () => {
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
  it("Create a page", () => {    
    cy.visit(data.url4+data.dir);
    postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    loginSelector.getEmailLogin().type(data.login.email);
    postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    loginSelector.getPasswordLogin().type(data.login.password);
    postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    loginSelector.getButtonLogin().click();
    postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    postSelector.getPageOption().click();
    postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    postSelector.getNewPageButton().click({force: true});
    postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    postSelector.getTextAreaTitle().type(newPost);
    postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    postSelector.getEditor().type(faker.lorem.paragraph());
    postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    postSelector.getBackButton().click();
    postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    postSelector.waitForList();
    postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    postSelector.getFilterOptions().first().click({force: true});
    postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    postSelector.getFilterDraft().click({force: true});
    postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    postSelector.waitForList();
    postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
  //@Then
    postSelector.getTitleFirstElementPages().should('to.contain',newPost);

  });
});
