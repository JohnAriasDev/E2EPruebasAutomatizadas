// <reference types="cypress" />
import LoginSelector from "../../support/PageObjects/loginSelector";
import PostSelector from "../../support/PageObjects/postSelector"
import { faker } from '@faker-js/faker';

describe("create a page with date error", () => {
    let data;
	
  const newPost = faker.commerce.productName();
    const loginSelector = new LoginSelector();
    const postSelector = new PostSelector();
    let index = 0;
    Cypress.config('scrollBehavior', false);

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
  it("Create a page with author error", () => {    
    cy.visit(data.url4+data.dir);
    //postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    loginSelector.getEmailLogin().type(data.login.email);
    //postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    loginSelector.getPasswordLogin().type(data.login.password);
    //postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    loginSelector.getButtonLogin().click();
    //postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    postSelector.getPageOption().click();
    //postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    postSelector.getNewPageButton().click({force: true});
    //postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    postSelector.getTextAreaTitle().type(newPost);
    //postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    postSelector.getEditor().type(faker.lorem.paragraph());
    //postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    postSelector.getSettings().click({force: true});
    //postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    postSelector.getPageURL().clear().type(faker.name.firstName());
    //postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    postSelector.getPageDate().clear().type('2022-'+faker.datatype.number({ min: 5, max: 5})+'-'+faker.datatype.number({ min: 19, max: 22}));
    //postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    postSelector.getPageTime().clear().type(faker.datatype.number({ min: 1, max: 23})+':'+faker.datatype.number({ min: 1, max: 59}));
    //postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    postSelector.getPageExcerpt().type(faker.lorem.paragraph());
    //postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    postSelector.getMetadataButton().scrollIntoView().click();
    //postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    postSelector.getMetadataTitle().type(faker.lorem.paragraph());
    //postSelector.getScreenShot(data.version4, data.scenarios.S9, index++);
    postSelector.getMetadataDesc().type(faker.name.firstName());
    //@Then
    postSelector.getPageMetadataDescriptionMessageError().then((x) => {
      expect(x).to.be.lessThan(145)
    })

  });
});
