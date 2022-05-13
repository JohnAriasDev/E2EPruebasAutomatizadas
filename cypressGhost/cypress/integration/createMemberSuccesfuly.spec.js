// <reference types="cypress" />
import LoginSelector from "../support/PageObjects/loginSelector";
import PostSelector from "../support/PageObjects/postSelector"
import { faker } from '@faker-js/faker';

describe("create a member", () => {
    let data;
    const name = faker.name.findName();
    const email = faker.internet.email();
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
  it("Create a member", () => {
    cy.visit(data.url+data.dir);
    loginSelector.getEmailLogin().type(data.login.email);
    loginSelector.getPasswordLogin().type(data.login.password);
    loginSelector.getButtonLogin().click();
    postSelector.getMemberOption().click({force: true});
    postSelector.getNewMemberButton().click();
    postSelector.getMemberNameInput().type(name,{force: true});
    postSelector.getMemberEmailInput().type(email);
    postSelector.getMemberNoteInput().type(faker.lorem.paragraph()); 
    postSelector.getSaveButton().click()
    postSelector.getSaveButton().children('span').should('to.contain', "Saved");
    postSelector.getMemberOption().first().click();
    //@Then
    postSelector.getFirstElementMembers().children('div').children('h3').should('to.contain', name);
    postSelector.getFirstElementMembers().children('div').children('p').should('to.contain', email);

  });
});