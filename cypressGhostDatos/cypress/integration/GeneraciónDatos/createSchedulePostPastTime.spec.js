// <reference types="cypress" />
import LoginSelector from "../../support/PageObjects/loginSelector";
import PostSelector from "../../support/PageObjects/postSelector";
import { faker } from "@faker-js/faker";

describe("schedule a draft post", () => {
  let data;
  const newPost = faker.commerce.productName();
  const loginSelector = new LoginSelector();
  const postSelector = new PostSelector();
  const time = faker.date.recent(0.03, new Date())

  //@Given
  beforeEach(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.fixture("datos").then(function (dataR) {
      data = dataR;
    });
  });
  //@When
  it("schedule a draft post", () => {
    cy.visit(data.url4+data.dir);
    loginSelector.getEmailLogin().type(data.login.email);
    loginSelector.getPasswordLogin().type(data.login.password);
    loginSelector.getButtonLogin().click();
    postSelector.getNewPostButton().click();
    postSelector.getTextAreaTitle().type(newPost);
    postSelector.getParagraphInput().type(faker.lorem.paragraph());
    postSelector.getBackButton().click();
    postSelector.getDrafOption().click();
    postSelector.getFirstElementTable().first().click();
    postSelector.getPublishDropdown().click();
    postSelector.getRadioScheduleCheck().click();
    postSelector.getInputTime().clear().type(`${time.getUTCHours()}:${time.getUTCMinutes()}`);
    postSelector.getPublishButton().click();

    //@Then    
    postSelector.getPublishButton().children('span').should('to.contain', 'Retry');
    postSelector.getErrorInputTime().should('to.contain', 'Must be at least 2 mins in the future')
  });
});
