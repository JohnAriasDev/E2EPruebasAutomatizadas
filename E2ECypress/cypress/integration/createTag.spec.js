// <reference types="cypress" />
import LoginSelector from "../support/PageObjects/loginSelector";
import PostSelector from "../support/PageObjects/postSelector"
import { faker } from '@faker-js/faker';

describe("create a tag", () => {
    let data;
    const newPost = faker.name.jobArea();
    const loginSelector = new LoginSelector();
    const postSelector = new PostSelector();

  //@Given
  beforeEach(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.fixture('datos').then(function(dataR){
        data = dataR;
    });
    cy.visit("http://localhost:2368/ghost/");
  });
  //@When
  it("Create a tag", () => {
    loginSelector.getEmailLogin().type(data.login.email);
    loginSelector.getPasswordLogin().type(data.login.password);
    loginSelector.getButtonLogin().click();
    postSelector.getTagOption().click();
    postSelector.getNewTagButton().click({force: true});
    postSelector.getTagNameInput().type(newPost);
    postSelector.getTagSlugInput().click();
    postSelector.getTagDescInput().type(faker.lorem.paragraph());
    postSelector.getTagColorInput().type("707070");
    postSelector.getSaveButton().click()
  //@Then
    postSelector.getSaveButton().children('span').should('have.text', "Saved", { timeout: 20000 });

  });
});
