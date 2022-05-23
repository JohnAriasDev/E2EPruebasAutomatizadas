// <reference types="cypress" />
import LoginSelector from "../../support/PageObjects/loginSelector";
import PostSelector from "../../support/PageObjects/postSelector"
import { faker } from '@faker-js/faker';

describe("create member with name 5", () => {
    let data;
    const myOracle = faker.name.firstName().substring(0,5);
    const myOracleEmail = faker.internet.email();
    const loginSelector = new LoginSelector();
    const postSelector = new PostSelector();
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
  it("Create a member with name 5", () => {
    cy.visit(data.url4+data.dir);
    loginSelector.getEmailLogin().type(data.login.email);
    loginSelector.getPasswordLogin().type(data.login.password);
    loginSelector.getButtonLogin().click();
    postSelector.getMemberOption().first().click({force: true});
    postSelector.getNewMemberButton().first().click();
    postSelector.getMemberNameInput().type(myOracle,{force: true});
    postSelector.getMemberEmailInput().type(myOracleEmail);
    postSelector.getSaveButton().click();
    postSelector.getMemberOption().first().click();
    //@Then
    postSelector.getFirstElementMembers().children('div').children('h3').should('to.contain', myOracle);
    postSelector.getFirstElementMembers().children('div').children('p').should('to.contain', myOracleEmail);
  });
});
