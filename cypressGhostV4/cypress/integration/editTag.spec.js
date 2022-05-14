// <reference types="cypress" />
import LoginSelector from "../support/PageObjects/loginSelector";
import PostSelector from "../support/PageObjects/postSelector"
import { faker } from '@faker-js/faker';

describe("Edit a tag", () => {
    let data;
    const tagname = faker.name.jobArea();
    const newTagname = faker.name.jobArea();
    const loginSelector = new LoginSelector();
    const postSelector = new PostSelector();
    var indexName = 0;

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
    cy.visit(data.url+data.dir);
    loginSelector.getEmailLogin().type(data.login.email);
    loginSelector.getPasswordLogin().type(data.login.password);
    loginSelector.getButtonLogin().click();
    postSelector.getTagOption().click();
    postSelector.getNewTagButton().click({force: true});
    postSelector.getTagNameInput().type(tagname);
    postSelector.getTagSlugInput().click();
    postSelector.getTagDescInput().type(faker.lorem.paragraph());
    postSelector.getTagColorInput().type("707070");
    postSelector.getSaveButton().click()
    postSelector.getSaveButton().children('span').should('to.contain', "Saved");
    postSelector.getTagOption().first().click();
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
    postSelector.getTagNameInput().clear().type(newTagname,{force: true});
    postSelector.getTagSlugInput().click();
    postSelector.getTagDescInput().clear().type(faker.lorem.paragraph(),{force: true});
    postSelector.getTagColorInput().type("305020");
    postSelector.getSaveButton().click()
    postSelector.getSaveButton().children('span').should('to.contain', "Saved");
    postSelector.getTagOption().first().click();
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