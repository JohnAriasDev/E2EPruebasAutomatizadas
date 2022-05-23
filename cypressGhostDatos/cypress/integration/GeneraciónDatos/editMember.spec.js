// <reference types="cypress" />
import LoginSelector from "../../support/PageObjects/loginSelector";
import PostSelector from "../../support/PageObjects/postSelector"
import { faker } from '@faker-js/faker';

describe("edit member", () => {
    let data;
    const myOracleName = faker.name.firstName();
    const myOracleEmail = faker.internet.email();
    const myOracle = faker.internet.email();
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
  it("Edit a member", () => {
    cy.visit(data.url4+data.dir);
    loginSelector.getEmailLogin().type(data.login.email);
    loginSelector.getPasswordLogin().type(data.login.password);
    loginSelector.getButtonLogin().click();
    postSelector.getMemberOption().first().click({force: true});
    postSelector.getNewMemberButton().first().click();
    postSelector.getMemberNameInput().type(myOracleName,{force: true});
    postSelector.getMemberEmailInput().type(myOracleEmail);
    postSelector.getSaveButton().click();
    postSelector.getMemberOption().first().click();
    postSelector.getFirstElementMembers().children('div').children('p').should('to.contain', myOracleEmail);
    postSelector.getFirstElementMembers().click();
    postSelector.getMemberEmailInput().invoke('val', '');
    cy.wait(1000);
    postSelector.getMemberEmailInput().type(myOracle);
    cy.wait(2000);
    postSelector.getSaveButton().click();    
    postSelector.getMemberOption().first().click();
    //@Then
    postSelector.getFirstElementMembers().children('div').children('h3').should('to.contain', myOracleName);
    postSelector.getFirstElementMembers().children('div').children('p').should('to.contain', myOracle);
  });
});
