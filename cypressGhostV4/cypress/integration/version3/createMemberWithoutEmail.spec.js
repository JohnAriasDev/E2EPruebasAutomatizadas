// <reference types="cypress" />
import LoginSelector from "../../support/PageObjects/loginSelector";
import PostSelector from "../../support/PageObjects/postSelector"
import { faker } from '@faker-js/faker';

describe("create a member without email", () => {
    let data;
    const name = faker.name.findName();
    const email = faker.internet.email();
    const loginSelector = new LoginSelector();
    const postSelector = new PostSelector();
    var indexName = 0;
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
  it("Create a member without email", () => {
    cy.visit(data.url3+data.dir);
    postSelector.getScreenShot(data.version3, data.scenarios.S15, index++);
    loginSelector.getEmailLogin().type(data.login.email);
    postSelector.getScreenShot(data.version3, data.scenarios.S15, index++);
    loginSelector.getPasswordLogin().type(data.login.password);
    postSelector.getScreenShot(data.version3, data.scenarios.S15, index++);
    loginSelector.getButtonLogin().click();
    postSelector.getScreenShot(data.version3, data.scenarios.S15, index++);
    postSelector.getMemberOption().first().click({force: true});
    postSelector.getScreenShot(data.version3, data.scenarios.S15, index++);
    postSelector.getNewMemberButton().first().click();
    postSelector.getScreenShot(data.version3, data.scenarios.S15, index++);
    postSelector.getMemberNameInput().type(name,{force: true});
    postSelector.getScreenShot(data.version3, data.scenarios.S15, index++);
    postSelector.getMemberNoteInput().type(faker.lorem.paragraph()); 
    postSelector.getScreenShot(data.version3, data.scenarios.S15, index++);
    postSelector.getSaveButton().click()
    postSelector.getScreenShot(data.version3, data.scenarios.S15, index++);
    //@then
    postSelector.getSaveButton().children('span').should('to.contain', "Retry");
    postSelector.getErrorEmailMember().should('to.contain', "Please enter an email.");
  });
});