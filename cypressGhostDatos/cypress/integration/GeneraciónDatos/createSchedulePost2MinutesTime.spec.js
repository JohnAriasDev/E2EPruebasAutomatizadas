// <reference types="cypress" />
import LoginSelector from "../../support/PageObjects/loginSelector";
import PostSelector from "../../support/PageObjects/postSelector";
import { faker } from "@faker-js/faker";

describe("schedule a draft post", () => {
  let data;
  const newPost = faker.commerce.productName();
  const loginSelector = new LoginSelector();
  const postSelector = new PostSelector();
  let time = new Date()  
  var indexName = 0;

  //@Given
  beforeEach(() => {
    time.setMinutes(time.getMinutes() + 3);
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
    loginSelector.getEmailLogin().type(data.login.email);
    loginSelector.getPasswordLogin().type(data.login.password);
    loginSelector.getButtonLogin().click();
    postSelector.getNewPostButton().click();
    postSelector.getTextAreaTitle().type(newPost);
    postSelector.getParagraphInput().type(faker.lorem.paragraph());
    postSelector.getBackButton().click();
    postSelector.getDrafOption().click();
    postSelector.getFirstElementTable().first().click();
    postSelector.getPublishDropdown().click();
    postSelector.getRadioScheduleCheck().click();
    postSelector.getInputTime().clear().type(`${time.getUTCHours()}:${time.getUTCMinutes()}`);
    postSelector.getPublishButton().click();
    postSelector.getPublishButtonConfirm().click();
    postSelector.getPublishButtonConfirm().should('not.exist');
    postSelector.getBackButton().click();
    postSelector.getScheduleOption().click();

    //@Then    
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
