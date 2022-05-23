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
    let today = new Date().toISOString().slice(0, 10)
    Cypress.config('scrollBehavior', false);

  //@Given
  beforeEach(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.fixture('datos').then(function(dataR){
        data = dataR;
    });

    cy.request('https://my.api.mockaroo.com/pages.json?key=e007cbd0').as('pagesDemo');

    cy.get('@pagesDemo').then(response=>{
      //cy.log(JSON.stringify(response))
      data_test=response
    });
	  //cy.fixture('ghost_create_page_schema').then(function(dataT){
    //      data_test = dataT;
    //  });	

  });
  //@When 
  it("Create a page with date error", () => {  
    //cy.log(data_test);  
  
    cy.visit(data.url4+data.dir); 
//    cy.log(data_test.body[13].page_title);
    cy.get(data_test.body).each(($el, index, $list) => {
      cy.log($el.page_date_pub)
      if ($el.page_date_pub > today) {
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
        postSelector.getPageURL().clear().type($el.page_url);
        //postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
        postSelector.getPageDate().clear().type($el.page_date_pub);
        //postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
        postSelector.getPageTime().clear().type($el.page_time_pub);
        //postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);  */  
        //@Then
        postSelector.getPageDateMessageError().should('to.contain','Must be in the past');
        //cy.log($el.page_date_pub+" es fecha mayor--Exito")
        return false;
      } 
      //else {
        // do something else
      //}
    })
  });
});
