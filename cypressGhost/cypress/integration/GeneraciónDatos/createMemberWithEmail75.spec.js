// <reference types="cypress" />
import LoginSelector from "../../support/PageObjects/loginSelector";
import PostSelector from "../../support/PageObjects/postSelector"
import { faker } from '@faker-js/faker';

describe("create member with email 75", () => {
    let data;
    const myOracleName = faker.name.firstName();
    const nickname = faker.lorem.paragraphs().replace(/[^A-Z0-9]/ig, "").substring(0,75);
    const myOracle = nickname + '@' + faker.internet.domainName();
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
  it("Create a member with email 75", () => {
    cy.visit(data.url4+data.dir);
    loginSelector.getEmailLogin().type(data.login.email);
    loginSelector.getPasswordLogin().type(data.login.password);
    loginSelector.getButtonLogin().click();
    postSelector.getMemberOption().first().click({force: true});
    postSelector.getNewMemberButton().first().click();
    postSelector.getMemberNameInput().type(myOracleName,{force: true});
    postSelector.getMemberEmailInput().type(myOracle);
    postSelector.getSaveButton().click();
    //@Then
    postSelector.getSaveButton().children('span').should('to.contain', "Retry");
    postSelector.getErrorEmailMember().should('to.contain', "Invalid Email.");
  });
});
