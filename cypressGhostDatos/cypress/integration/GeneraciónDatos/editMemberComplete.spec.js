// <reference types="cypress" />
import LoginSelector from "../../support/PageObjects/loginSelector";
import PostSelector from "../../support/PageObjects/postSelector"
import { faker } from '@faker-js/faker';

describe("edit member complete", () => {
    let data;
    const myOracleName = faker.name.firstName();
    const myOracleName2 = faker.name.firstName();
    const myOracleNote = (faker.lorem.paragraphs()) .replace(/[^A-Z0-9]/ig, "").substring(0,50);
    const myOracleNote2 = (faker.lorem.paragraphs()) .replace(/[^A-Z0-9]/ig, "").substring(0,50);
    const myOracleLabel =  faker.name.jobArea();
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
  it("Edit member complete", () => {
    cy.visit(data.url4+data.dir);
    loginSelector.getEmailLogin().type(data.login.email);
    loginSelector.getPasswordLogin().type(data.login.password);
    loginSelector.getButtonLogin().click();
    postSelector.getMemberOption().first().click({force: true});
    postSelector.getNewMemberButton().first().click();
    postSelector.getMemberNameInput().type(myOracleName,{force: true});
    postSelector.getMemberEmailInput().type(myOracle);
    postSelector.getMemberLabelInput().type(myOracleLabel);
    postSelector.getMemberLabelAddBtn().click();
    postSelector.getMemberNoteInput().type(myOracleNote,{force: true});
    postSelector.getSaveButton().click();
    postSelector.getMemberOption().first().click();
    postSelector.getFirstElementMembers().children('div').children('p').should('to.contain', myOracle);
    postSelector.getFirstElementMembers().click();
    postSelector.getMemberNameInput().type(myOracleName2,{force: true});
    postSelector.getMemberNoteInput().type(myOracleNote2,{force: true});
    postSelector.getSaveButton().click();
    postSelector.getMemberOption().first().click();
    //@Then
    postSelector.getFirstElementMembers().children('div').children('h3').should('to.contain', myOracleName2);
    postSelector.getFirstElementMembers().children('div').children('p').should('to.contain', myOracle);
  });
});
