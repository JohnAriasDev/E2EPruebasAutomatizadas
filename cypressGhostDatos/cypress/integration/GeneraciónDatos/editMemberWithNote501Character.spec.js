// <reference types="cypress" />
import LoginSelector from "../../support/PageObjects/loginSelector";
import PostSelector from "../../support/PageObjects/postSelector"
import { faker } from '@faker-js/faker';

describe("edit member without note", () => {
    let data;
    const myOracleName = faker.name.firstName();
    const myOracle = faker.internet.email();
    const myOracleNote = (faker.lorem.paragraphs()) .replace(/[^A-Z0-9]/ig, "").substring(0,50);
    const myOracleNote2 = (faker.lorem.paragraphs() + faker.lorem.paragraphs()) .replace(/[^A-Z0-9]/ig, "").substring(0,501);
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
  it("Edit member without note", () => {
    cy.visit(data.url4+data.dir);
    loginSelector.getEmailLogin().type(data.login.email);
    loginSelector.getPasswordLogin().type(data.login.password);
    loginSelector.getButtonLogin().click();
    postSelector.getMemberOption().first().click({force: true});
    postSelector.getNewMemberButton().first().click();
    postSelector.getMemberNameInput().type(myOracleName,{force: true});
    postSelector.getMemberEmailInput().type(myOracle);
    postSelector.getMemberNoteInput().type(myOracleNote);
    postSelector.getSaveButton().click();
    postSelector.getMemberOption().first().click();
    postSelector.getFirstElementMembers().children('div').children('p').should('to.contain', myOracle);
    postSelector.getFirstElementMembers().click();
    postSelector.getMemberNoteInput().clear();
    cy.wait(1000);
    postSelector.getMemberNoteInput().type(myOracleNote2);
    cy.wait(4000);
    postSelector.getSaveButton().click();
    //@Then
    postSelector.getMemberNoteLongMessage().should('to.contain', 'Note is too long.');
  });
});
