// <reference types="cypress" />
import LoginSelector from "../support/PageObjects/loginSelector";
import PostSelector from "../support/PageObjects/postSelector"
import { faker } from '@faker-js/faker';

describe("create a member without email", () => {
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
  it("Create a member without email", () => {
    cy.visit(data.url+data.dir);
    loginSelector.getEmailLogin().type(data.login.email);
    loginSelector.getPasswordLogin().type(data.login.password);
    loginSelector.getButtonLogin().click();
    postSelector.getMemberOption().click({force: true});
    postSelector.getNewMemberButton().click();
    postSelector.getMemberNameInput().type(name,{force: true});
    postSelector.getMemberNoteInput().type(faker.lorem.paragraph()); 
    postSelector.getSaveButton().click()
    //@then
    postSelector.getSaveButton().children('span').should('to.contain', "Retry");
    postSelector.getErrorEmailMember().should('to.contain', "Please enter an email.");
  });
});