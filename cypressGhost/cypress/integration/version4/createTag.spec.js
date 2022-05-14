// <reference types="cypress" />
import LoginSelector from "../../support/PageObjects/loginSelector";
import PostSelector from "../../support/PageObjects/postSelector"
import { faker } from '@faker-js/faker';

describe("create a tag", () => {
    let data;
    const newPost = faker.name.jobArea();
    const loginSelector = new LoginSelector();
    const postSelector = new PostSelector();
    var indexName = 0;
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
  it("Create a tag", () => {
    cy.visit(data.url4+data.dir);
    postSelector.getScreenShot(data.version4, data.scenarios.S13, index++);
    loginSelector.getEmailLogin().type(data.login.email);
    postSelector.getScreenShot(data.version4, data.scenarios.S13, index++);
    loginSelector.getPasswordLogin().type(data.login.password);
    postSelector.getScreenShot(data.version4, data.scenarios.S13, index++);
    loginSelector.getButtonLogin().click();
    postSelector.getScreenShot(data.version4, data.scenarios.S13, index++);
    postSelector.getTagOption().click();
    postSelector.getScreenShot(data.version4, data.scenarios.S13, index++);
    postSelector.getNewTagButton().click({force: true});
    postSelector.getScreenShot(data.version4, data.scenarios.S13, index++);
    postSelector.getTagNameInput().type(newPost);
    postSelector.getScreenShot(data.version4, data.scenarios.S13, index++);
    postSelector.getTagSlugInput().click();
    postSelector.getScreenShot(data.version4, data.scenarios.S13, index++);
    postSelector.getTagDescInput().type(faker.lorem.paragraph());
    postSelector.getScreenShot(data.version4, data.scenarios.S13, index++);
    postSelector.getTagColorInput().type("707070");
    postSelector.getScreenShot(data.version4, data.scenarios.S13, index++);
    postSelector.getSaveButton().click()
    postSelector.getScreenShot(data.version4, data.scenarios.S13, index++);
    postSelector.getSaveButton().children('span').should('to.contain', "Saved");
    postSelector.getScreenShot(data.version4, data.scenarios.S13, index++);
    postSelector.getTagOption().first().click();
    postSelector.getScreenShot(data.version4, data.scenarios.S13, index++);
    //@Then
    postSelector.getTagTitles().each(($el, index, $list) =>{
      let aux = ''
      aux = $el.text();
      if(aux.includes(newPost)){
        indexName = index+1;
      }
    }).then(()=>{
      postSelector.getTitleElementTag(indexName).should('to.contain',newPost);
    });

  });
});
