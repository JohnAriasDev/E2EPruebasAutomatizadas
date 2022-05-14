// <reference types="cypress" />
import LoginSelector from "../../support/PageObjects/loginSelector";
import PostSelector from "../../support/PageObjects/postSelector"
import { faker } from '@faker-js/faker';

describe("Delete a member", () => {
    let data;
    const name = faker.name.findName();
    const email = faker.internet.email();
    const newName = faker.name.findName();
    const newEmail = faker.internet.email();
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
    it("Delete a member", () => {
        cy.visit(data.url3 + data.dir);
        postSelector.getScreenShot(data.version3, data.scenarios.S18, index++);
        loginSelector.getEmailLogin().type(data.login.email);
        postSelector.getScreenShot(data.version3, data.scenarios.S18, index++);
        loginSelector.getPasswordLogin().type(data.login.password);
        postSelector.getScreenShot(data.version3, data.scenarios.S18, index++);
        loginSelector.getButtonLogin().click();
        postSelector.getScreenShot(data.version3, data.scenarios.S18, index++);
        postSelector.getMemberOption().first().click({ force: true });
        postSelector.getScreenShot(data.version3, data.scenarios.S18, index++);
        postSelector.getNewMemberButton().first().click();
        postSelector.getScreenShot(data.version3, data.scenarios.S18, index++);
        postSelector.getMemberNameInput().type(name, { force: true });
        postSelector.getScreenShot(data.version3, data.scenarios.S18, index++);
        postSelector.getMemberEmailInput().type(email);
        postSelector.getScreenShot(data.version3, data.scenarios.S18, index++);
        postSelector.getMemberNoteInput().type(faker.lorem.paragraph());
        postSelector.getScreenShot(data.version3, data.scenarios.S18, index++);
        postSelector.getSaveButton().click()
        postSelector.getScreenShot(data.version3, data.scenarios.S18, index++);
        postSelector.getSaveButton().children('span').should('to.contain', "Saved");
        postSelector.getScreenShot(data.version3, data.scenarios.S18, index++);
        postSelector.getMemberOption().first().click();
        postSelector.getScreenShot(data.version3, data.scenarios.S18, index++);
        postSelector.getFirstElementMembers().children('div').children('h3').should('to.contain', name);
        postSelector.getFirstElementMembers().children('div').children('p').should('to.contain', email);
        postSelector.getElementsMembers().its("length").as("initialCount");
        postSelector.getFirstElementMembers().click();
        postSelector.getScreenShot(data.version3, data.scenarios.S18, index++);
        postSelector.getSettingsButtonMember().click();
        postSelector.getScreenShot(data.version3, data.scenarios.S18, index++);
        postSelector.getDeleteButtonMember().click();
        postSelector.getScreenShot(data.version3, data.scenarios.S18, index++);
        postSelector.getDeleteButtonTagConfirmation().click();
        postSelector.getScreenShot(data.version3, data.scenarios.S18, index++);
        postSelector.getElementsMembers().its("length").as("nextCount");

        //@Then
        cy.get("@initialCount").then((initial) => {
            cy.get("@nextCount").then((next) => {
                expect(initial - 1).to.eq(next);
            });
        });
    });
});