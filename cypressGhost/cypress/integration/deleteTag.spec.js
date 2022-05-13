// <reference types="cypress" />
import LoginSelector from "../support/PageObjects/loginSelector";
import PostSelector from "../support/PageObjects/postSelector"
import { faker } from '@faker-js/faker';

describe("Delete a tag", () => {
    let data;
    const tagname = faker.name.jobArea();
    const newTagname = faker.name.jobArea();
    const loginSelector = new LoginSelector();
    const postSelector = new PostSelector();
    var indexName = 0;

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
        cy.visit(data.url + data.dir);
        loginSelector.getEmailLogin().type(data.login.email);
        loginSelector.getPasswordLogin().type(data.login.password);
        loginSelector.getButtonLogin().click();
        postSelector.getTagOption().click();
        postSelector.getNewTagButton().click({ force: true });
        postSelector.getTagNameInput().type(tagname);
        postSelector.getTagSlugInput().click();
        postSelector.getTagDescInput().type(faker.lorem.paragraph());
        postSelector.getTagColorInput().type("707070");
        postSelector.getSaveButton().click()
        postSelector.getSaveButton().children('span').should('to.contain', "Saved");
        postSelector.getTagOption().first().click();
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
        postSelector.getDeleteButtonTag().click();
        postSelector.getDeleteButtonTagConfirmation().click();
        postSelector.getTagTitles().its("length").as("nextCount");
        //@Then
        cy.get("@initialCount").then((initial) => {
            cy.get("@nextCount").then((next) => {
                expect(initial - 1).to.eq(next);
            });
        });
    });
});