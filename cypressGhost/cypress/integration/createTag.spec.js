// <reference types="cypress" />
import LoginSelector from "../support/PageObjects/loginSelector";
import PostSelector from "../support/PageObjects/postSelector"
import { faker } from '@faker-js/faker';

describe("create a tag", () => {
    let data;
    const newPost = faker.name.jobArea();
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
  it("Create a tag", () => {
    cy.visit(data.url+data.dir);
    loginSelector.getEmailLogin().type(data.login.email);
    loginSelector.getPasswordLogin().type(data.login.password);
    loginSelector.getButtonLogin().click();
    postSelector.getTagOption().click();
    postSelector.getNewTagButton().click({force: true});
    postSelector.getTagNameInput().type(newPost);
    postSelector.getTagSlugInput().click();
    postSelector.getTagDescInput().type(faker.lorem.paragraph());
    postSelector.getTagColorInput().type("707070");
    postSelector.getSaveButton().click()
    postSelector.getSaveButton().children('span').should('to.contain', "Saved");
    postSelector.getTagOption().first().click();
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
