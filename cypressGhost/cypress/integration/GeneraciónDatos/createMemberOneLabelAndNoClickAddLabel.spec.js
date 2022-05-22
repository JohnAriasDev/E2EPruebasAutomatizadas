// <reference types="cypress" />
import LoginSelector from "../../support/PageObjects/loginSelector";
import PostSelector from "../../support/PageObjects/postSelector"
import { faker } from '@faker-js/faker';

describe("create member one label and no click add label", () => {
    let data;
    const myOracleName = faker.name.firstName();
    const nickname = faker.lorem.paragraphs().replace(/[^A-Z0-9]/ig, "").substring(0,60);
    const myOracle = nickname + '@' + faker.internet.domainName();
    const myOracleLabel = faker.name.jobArea();
    const myOracleLabel2 = faker.name.jobArea();
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
  it("create member one label and no click add label", () => {
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
    postSelector.getMemberLabelInput().type(myOracleLabel2);
    postSelector.getSaveButton().click();
    postSelector.getMemberOption().first().click();
    postSelector.getFirstElementMembers().children('div').children('p').should('to.contain', myOracle);
    postSelector.getFirstElementMembers().click();
    //@Then
    postSelector.getMemberLabelList().should('have.length', 1);
  });
});
