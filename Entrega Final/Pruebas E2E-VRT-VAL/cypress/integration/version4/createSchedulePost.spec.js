// <reference types="cypress" />
import LoginSelector from "../../support/PageObjects/loginSelector";
import PostSelector from "../../support/PageObjects/postSelector";
import { faker } from "@faker-js/faker";

describe("schedule a draft post", () => {
  let data;
  const newPost = faker.commerce.productName();
  const loginSelector = new LoginSelector();
  const postSelector = new PostSelector();
  let index = 0;
  var indexName = 0;

  //@Given
  beforeEach(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.fixture("datos").then(function (dataR) {
      data = dataR;
    });
  });
  //@When
  it("schedule a draft post", () => {
    cy.visit(data.url4+data.dir);
    postSelector.getScreenShot(data.version4, data.scenarios.S3, index++);
    loginSelector.getEmailLogin().type(data.login.email);
    postSelector.getScreenShot(data.version4, data.scenarios.S3, index++);
    loginSelector.getPasswordLogin().type(data.login.password);
    postSelector.getScreenShot(data.version4, data.scenarios.S3, index++);
    loginSelector.getButtonLogin().click();
    postSelector.getScreenShot(data.version4, data.scenarios.S3, index++);
    postSelector.getNewPostButton().click();
    postSelector.getScreenShot(data.version4, data.scenarios.S3, index++);
    postSelector.getTextAreaTitle().type(newPost);
    postSelector.getScreenShot(data.version4, data.scenarios.S3, index++);
    postSelector.getParagraphInput().type(faker.lorem.paragraph());
    postSelector.getScreenShot(data.version4, data.scenarios.S3, index++);
    postSelector.getBackButton().click();
    postSelector.getScreenShot(data.version4, data.scenarios.S3, index++);
    postSelector.getDrafOption().click();
    postSelector.getScreenShot(data.version4, data.scenarios.S3, index++);
    postSelector.getFirstElementTable().first().click();
    postSelector.getScreenShot(data.version4, data.scenarios.S3, index++);
    postSelector.getPublishDropdown().click();
    postSelector.getScreenShot(data.version4, data.scenarios.S3, index++);
    postSelector.getRadioScheduleCheck().click();    
    postSelector.getScreenShot(data.version4, data.scenarios.S3, index++);
    postSelector.getPublishButton().click();
    postSelector.getScreenShot(data.version4, data.scenarios.S3, index++);
    postSelector.getPublishButtonConfirm().click();
    postSelector.getScreenShot(data.version4, data.scenarios.S3, index++);
    postSelector.getPublishButtonConfirm().should('not.exist');
    postSelector.getScreenShot(data.version4, data.scenarios.S3, index++);
    postSelector.getBackButton().click();
    postSelector.getScreenShot(data.version4, data.scenarios.S3, index++);
    postSelector.getScheduleOption().click();
    postSelector.getScreenShot(data.version4, data.scenarios.S3, index++);

       
    postSelector.getPostTitles().each(($el, index, $list) =>{
      let aux = ''
      aux = $el.text();
      if(aux.includes(newPost)){
        indexName = index+1;
      }
    }).then(()=>{
      postSelector.getTitleElementPost(indexName).should('to.contain',newPost);
    });
  });
});
