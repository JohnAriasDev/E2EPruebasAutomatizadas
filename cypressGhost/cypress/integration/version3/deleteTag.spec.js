// <reference types="cypress" />
import LoginSelector from "../../support/PageObjects/loginSelector";
import PostSelector from "../../support/PageObjects/postSelector"
import { faker } from '@faker-js/faker';

describe("Delete a tag", () => {
    let data;
    const tagname = faker.name.jobArea();
    const newTagname = faker.name.jobArea();
    const loginSelector = new LoginSelector();
    const postSelector = new PostSelector();
    var indexName = 0;
    let index = 0;

    //@Given
    beforeEach(() => {
        Cypress.on("uncaught:exception", (err, runnable) => {
            return false;
        });
        cy.fixture('datos').then(function (dataR) {
            data = dataR;
        });
    });
    //@When
    it("Delete a tag", () => {
        cy.visit(data.url3 + data.dir);
        postSelector.getScreenShot(data.version3, data.scenarios.S20, index++);
        loginSelector.getEmailLogin().type(data.login.email);
        postSelector.getScreenShot(data.version3, data.scenarios.S20, index++);
        loginSelector.getPasswordLogin().type(data.login.password);
        postSelector.getScreenShot(data.version3, data.scenarios.S20, index++);
        loginSelector.getButtonLogin().click();
        postSelector.getScreenShot(data.version3, data.scenarios.S20, index++);
        postSelector.getTagOption().click();
        postSelector.getScreenShot(data.version3, data.scenarios.S20, index++);
        postSelector.getNewTagButton().click({ force: true });
        postSelector.getScreenShot(data.version3, data.scenarios.S20, index++);
        postSelector.getTagNameInput().type(tagname);
        postSelector.getScreenShot(data.version3, data.scenarios.S20, index++);
        postSelector.getTagSlugInput().click();
        postSelector.getScreenShot(data.version3, data.scenarios.S20, index++);
        postSelector.getTagDescInput().type(faker.lorem.paragraph());
        postSelector.getScreenShot(data.version3, data.scenarios.S20, index++);
        postSelector.getTagColorInput().type("707070");
        postSelector.getScreenShot(data.version3, data.scenarios.S20, index++);
        postSelector.getSaveButton().click()
        postSelector.getScreenShot(data.version3, data.scenarios.S20, index++);
        postSelector.getSaveButton().children('span').should('to.contain', "Saved");
        postSelector.getScreenShot(data.version3, data.scenarios.S20, index++);
        postSelector.getTagOption().first().click();
        postSelector.getScreenShot(data.version3, data.scenarios.S20, index++);
        postSelector.getTagTitles().its("length").as("initialCount");
        postSelector.getTagTitles().each(($el, index, $list) => {
            let aux = ''
            aux = $el.text();
            if (aux.includes(tagname)) {
                indexName = index + 1;
            }
        }).then(() => {
            postSelector.getElementTag(indexName).as("TagElement");
        });
        cy.get("@TagElement").click();
        postSelector.getScreenShot(data.version3, data.scenarios.S20, index++);
        postSelector.getDeleteButtonTag().click();
        postSelector.getScreenShot(data.version3, data.scenarios.S20, index++);
        postSelector.getDeleteButtonTagConfirmation().click();
        postSelector.getScreenShot(data.version3, data.scenarios.S20, index++);
        postSelector.getTagTitles().its("length").as("nextCount");
        //@Then
        cy.get("@initialCount").then((initial) => {
            cy.get("@nextCount").then((next) => {
                expect(initial - 1).to.eq(next);
            });
        });
    });
});