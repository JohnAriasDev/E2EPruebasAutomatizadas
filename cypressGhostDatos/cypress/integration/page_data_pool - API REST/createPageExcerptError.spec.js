// <reference types="cypress" />
import LoginSelector from "../../support/PageObjects/loginSelector";
import PostSelector from "../../support/PageObjects/postSelector"
import { faker } from '@faker-js/faker';

describe("create a page", () => {
    let data;
	let data_test;
    const newPost = faker.commerce.productName();
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
	  //cy.fixture('ghost_create_page_schema').then(function(dataT){
    //    data_test = dataT;
    //});
    cy.request('https://my.api.mockaroo.com/pages.json?key=e007cbd0').as('pagesDemo');

    cy.get('@pagesDemo').then(response=>{
      //cy.log(JSON.stringify(response))
      data_test=response
    });     	
  });
  //@When
  it("Create a page", () => {    
    cy.visit(data.url4+data.dir);
    cy.get(data_test.body).each(($el, index, $list) => {
      cy.log($el.page_excerpt)
      let pageExcerpt = $el.page_excerpt.split("");
      if (pageExcerpt.length > 350) {
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
        postSelector.getTextAreaTitle().type($el.page_title);
        //postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
        postSelector.getEditor().type($el.page_description);
        //postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
        postSelector.getSettings().click({force: true});
        //postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
        postSelector.getPageURL().clear().type($el.page_url, { parseSpecialCharSequences: false });
        //postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
        postSelector.getPageExcerpt().type($el.page_excerpt);
        //postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
        postSelector.getPageURL().click();
        //@Then 
        postSelector.getPageExcerptMessageError().should('to.contain','Excerpt cannot be longer than 300 characters.');        
        
      } 
      //else {
        // do something else
      //}
    })
  });
});
