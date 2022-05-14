// <reference types="cypress" />
import LoginSelector from "../../support/PageObjects/loginSelector";
import PostSelector from "../../support/PageObjects/postSelector"
import { faker } from '@faker-js/faker';

describe("see preview page", () => {
    let data;
    const newPost = faker.commerce.productName();
    const loginSelector = new LoginSelector();
    const postSelector = new PostSelector();
    let urlPreview = '';
    let index = 0;

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
  });
  //@When
  it("see preview page", () => {  
    cy.visit(data.url4+data.dir);
    postSelector.getScreenShot(data.version, data.scenarios.S10, index++);
    loginSelector.getEmailLogin().type(data.login.email);
    postSelector.getScreenShot(data.version, data.scenarios.S10, index++);
    loginSelector.getPasswordLogin().type(data.login.password);
    postSelector.getScreenShot(data.version, data.scenarios.S10, index++);
    loginSelector.getButtonLogin().click();
    postSelector.getScreenShot(data.version, data.scenarios.S10, index++);
    postSelector.getPageOption().click();
    postSelector.getScreenShot(data.version, data.scenarios.S10, index++);
    postSelector.getNewPageButton().click({force: true});
    postSelector.getScreenShot(data.version, data.scenarios.S10, index++);
    postSelector.getTextAreaTitle().type(newPost);
    postSelector.getScreenShot(data.version, data.scenarios.S10, index++);
    postSelector.getEditor().type(faker.lorem.paragraph());
    postSelector.getScreenShot(data.version, data.scenarios.S10, index++);
    postSelector.getPreview().click();
    postSelector.getScreenShot(data.version, data.scenarios.S10, index++);
    postSelector.getUrlPreviewPage().children('.db').then(($text)=>{
      urlPreview = $text.text();
      urlPreview = urlPreview.replace("http://localhost:2368/", data.url4);      
      cy.visit(urlPreview);
    });
    postSelector.getScreenShot(data.version, data.scenarios.S10, index++);
    //@then
    postSelector.getTitlePreview().should('to.contain', newPost)
  });
});
