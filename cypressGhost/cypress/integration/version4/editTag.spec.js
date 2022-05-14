// <reference types="cypress" />
import LoginSelector from "../../support/PageObjects/loginSelector";
import PostSelector from "../../support/PageObjects/postSelector"
import { faker } from '@faker-js/faker';

describe("Edit a tag", () => {
    let data;
    const tagname = faker.name.jobArea();
    const newTagname = faker.name.jobArea();
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
  it("Edit a tag", () => {
    cy.visit(data.url4+data.dir);
    postSelector.getScreenShot(data.version4, data.scenarios.S19, index++);
    loginSelector.getEmailLogin().type(data.login.email);
    postSelector.getScreenShot(data.version4, data.scenarios.S19, index++);
    loginSelector.getPasswordLogin().type(data.login.password);
    postSelector.getScreenShot(data.version4, data.scenarios.S19, index++);
    loginSelector.getButtonLogin().click();
    postSelector.getScreenShot(data.version4, data.scenarios.S19, index++);
    postSelector.getTagOption().click();
    postSelector.getScreenShot(data.version4, data.scenarios.S19, index++);
    postSelector.getNewTagButton().click({force: true});
    postSelector.getScreenShot(data.version4, data.scenarios.S19, index++);
    postSelector.getTagNameInput().type(tagname);
    postSelector.getScreenShot(data.version4, data.scenarios.S19, index++);
    postSelector.getTagSlugInput().click();
    postSelector.getScreenShot(data.version4, data.scenarios.S19, index++);
    postSelector.getTagDescInput().type(faker.lorem.paragraph());
    postSelector.getScreenShot(data.version4, data.scenarios.S19, index++);
    postSelector.getTagColorInput().type("707070");
    postSelector.getScreenShot(data.version4, data.scenarios.S19, index++);
    postSelector.getSaveButton().click()
    postSelector.getScreenShot(data.version4, data.scenarios.S19, index++);
    postSelector.getSaveButton().children('span').should('to.contain', "Saved");
    postSelector.getScreenShot(data.version4, data.scenarios.S19, index++);
    postSelector.getTagOption().first().click();
    postSelector.getScreenShot(data.version4, data.scenarios.S19, index++);
    postSelector.getTagTitles().each(($el, index, $list) =>{
      let aux = ''
      aux = $el.text();
      if(aux.includes(tagname)){
        indexName = index+1;
      }
    }).then(()=>{
      postSelector.getElementTag(indexName).as("TagElement");
    });
    cy.get("@TagElement").click();
    postSelector.getScreenShot(data.version4, data.scenarios.S19, index++);
    postSelector.getTagNameInput().clear().type(newTagname,{force: true});
    postSelector.getScreenShot(data.version4, data.scenarios.S19, index++);
    postSelector.getTagSlugInput().click();
    postSelector.getScreenShot(data.version4, data.scenarios.S19, index++);
    postSelector.getTagDescInput().clear().type(faker.lorem.paragraph(),{force: true});
    postSelector.getScreenShot(data.version4, data.scenarios.S19, index++);
    postSelector.getTagColorInput().type("305020");
    postSelector.getScreenShot(data.version4, data.scenarios.S19, index++);
    postSelector.getSaveButton().click()
    postSelector.getScreenShot(data.version4, data.scenarios.S19, index++);
    postSelector.getSaveButton().children('span').should('to.contain', "Saved");
    postSelector.getScreenShot(data.version4, data.scenarios.S19, index++);
    postSelector.getTagOption().first().click();
    postSelector.getScreenShot(data.version4, data.scenarios.S19, index++);
    //@then
    postSelector.getTagTitles().each(($el, index, $list) =>{
        let aux = ''
        aux = $el.text();
        if(aux.includes(newTagname)){
          indexName = index+1;
        }
      }).then(()=>{
        postSelector.getTitleElementTag(indexName).should('to.contain',newTagname);
      });

  });
});