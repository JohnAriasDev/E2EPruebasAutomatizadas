const selectors = require("../comunes/PageObject");
const { Given, When, Then} = require("@cucumber/cucumber");
const expect = require('chai').expect;


Given("I write my email {kraken-string}", async function (email) {
    let emailInput = await this.driver.$(selectors.InputEmail);
    return await emailInput.setValue(email);
  });

  Given("I enter password {kraken-string}", async function (password) {
    let passwordInput = await this.driver.$(selectors.InputPassword);
    return await passwordInput.setValue(password);
  });
  
  Given("I click on the login button", async function () {
    let loginButton = await this.driver.$(selectors.ButtonLogin);
    return await loginButton.click();
  });
  
  When("I click on the new post button", async function () {
    let newPost = this.driver.$(selectors.NewPost);
    return await newPost.click();
  });
  
  When("I write {kraken-string} in the post title", async function (title) {
    let titleInput = await this.driver.$(selectors.TextAreaTitle);
    await titleInput.setValue(title);
  
    // Clicking outside the title text area
    const buttonBack = await this.driver.$(selectors.ButtonBack);
    return await buttonBack.click();
  });
  
  When("I publish the new post", async function () {
  const spanSettingsMenu = await this.driver.$(selectors.SpanSettingsMenu);
     await spanSettingsMenu.click();
     const divPublish = await this.driver.$(selectors.DivPublish);
     await divPublish.click();
     const buttonPublish = await this.driver.$(selectors.ButtonPublish);
     await buttonPublish.click();
     const buttonPublishConfirmation = await this.driver.$(selectors.ButtonPublishConfirmation);
     return await buttonPublishConfirmation.click();
  });
     
  /*
  When("I publish the new post", async function () {
    const spanSettingsMenu = await this.driver.$(selectors.spanSettingsMenu);
    await spanSettingsMenu.click();
    const divPublish = await this.driver.$(selectors.DivPublish);
    await divPublish.click();
    const buttonPublish = await this.driver.$(selectors.ButtonPublish);
    await buttonPublish.click();
    const buttonPublishConfirmation = await this.driver.$(
      selectors.ButtonPublishConfirmation
    );
    return await buttonPublishConfirmation.click();
  });*/
  

  When("I schedule the new post", async function () {
    let spanSettingsMenu = await this.driver.$(selectors.SpanSettingsMenu);
    await spanSettingsMenu.click();
    let divPublish = await this.driver.$(selectors.DivPublish);
    await divPublish.click();
    let radioButtonSchedule = await this.driver.$(
      selectors.RadioButtonSchedule
    );
    await radioButtonSchedule.click();
    let scheduleButton = await this.driver.$(selectors.ButtonSchedule);
    await scheduleButton.click();
    let scheduleConfirmationButton = await this.driver.$(
      selectors.ButtonScheduleConfirmation
    );
    return await scheduleConfirmationButton.click();
  });
  
  When("I return to the posts list", async function () {
    const buttonBack = await this.driver.$(selectors.ButtonBack);
    return await buttonBack.click();
  });
  
  When("I filter posts by status Published", async function () {
    const filterByStatus = await this.driver.$(selectors.FilterByStatus);
    await filterByStatus.click();
    const publishedOption = await this.driver.$(selectors.PublishedOption);
    return await publishedOption.click();
  });
  
  When("I filter posts by status Draft", async function () {
    const filterByStatus = await this.driver.$(selectors.FilterByStatus);
    await filterByStatus.click();
    const draftOption = await this.driver.$(selectors.DraftOption);
    return await draftOption.click();
  });
  
  When("I filter posts by status Scheduled", async function () {
    const filterByStatus = await this.driver.$(selectors.FilterByStatus);
    await filterByStatus.click();
    const scheduledOption = await this.driver.$(selectors.ScheduledOption);
    return await scheduledOption.click();
  });
  
  When("I click in the first post in the list", async function () {
    const firstPostItem = await this.driver.$(selectors.ListPostItem);
    return await firstPostItem.click();
  });
  
  When("I open the post setting", async function () {
    const settingsButton = await this.driver.$(selectors.ButtonPostSettings);
    return await settingsButton.click();
  });
  
  When("I delete the post", async function () {
    const buttonDeletePost = await this.driver.$(selectors.ButtonDeletePost);
    await buttonDeletePost.click();
    const buttonConfirmDeletePost = await this.driver.$(
      selectors.ButtonConfirmDeletePost
    );
    return await buttonConfirmDeletePost.click();
  });
  
 Then(
    "I see that the first post in the list has title {kraken-string}",
    async function (title) {
        const list = await this.driver.$$(selectors.PostItemTitle);
        const postTitle = await list[0].getText();
        expect(postTitle).to.equal(title);
    }
  );
  
  
  Then(
    "I see that there is no post with the title {kraken-string} in the post list",
    async function (title) {
      const list = await this.driver.$$(selectors.PostItemTitle);
      const postTitle = await list[0].getText();
      expect(postTitle).to.not.equal(title);
    }
  );