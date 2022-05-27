// <reference types="cypress" />
import LoginSelector from "../../support/PageObjects/loginSelector";
import PostSelector from "../../support/PageObjects/postSelector"
import { faker } from '@faker-js/faker';

describe("create a page with date error", () => {
    let data;
	let data_test;
    const loginSelector = new LoginSelector();
    const postSelector = new PostSelector();
    let index = 0;
    Cypress.config('scrollBehavior', false);

  //@Given
  beforeEach(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.fixture('datos').then(function(dataR){
        data = dataR;
    });
	cy.fixture('ghost_create_page_schema').then(function(dataT){
        data_test = dataT;
    });	
  });
  //@When 
  it("Create a page with date error", () => {    
    cy.visit(data.url4+data.dir); 
    //postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    loginSelector.getEmailLogin().type(data.login.email);
    //postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    loginSelector.getPasswordLogin().type(data.login.password);
    //postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    loginSelector.getButtonLogin().click();
    //postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    postSelector.getPageOption().click();
    //postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    postSelector.getNewPageButton().click({force: true});
    //postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    postSelector.getTextAreaTitle().type(data_test[6].page_title);
    //postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    postSelector.getEditor().type(data_test[6].page_description);
    //postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    postSelector.getSettings().click({force: true});
    //postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    postSelector.getPageURL().clear().type(data_test[6].page_url);
    //postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    postSelector.getPageDate().clear().type(data_test[6].page_date_pub);
    //postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    postSelector.getPageTime().clear().type(data_test[6].page_time_pub);
    //postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);    
  //@Then
    postSelector.getPageDateMessageError().should('to.contain','Must be in the past');

  });
});
