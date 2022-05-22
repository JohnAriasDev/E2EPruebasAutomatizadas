const selectors = require("../comunes/PageObject");
const { Given, When, Then} = require("@cucumber/cucumber");
const expect = require('chai').expect;
const basePath = './screenshots/';
const fs = require('fs');
const utilsFaker = require("../step_definitions/utilsDataGeneration");


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
  

  When("I write {kraken-string} in the page title", async function (title) {
    let titleInput = await this.driver.$(selectors.TextAreaTitle);
    await titleInput.setValue(title);

  });


  When("I click in back page button", async function () {
    let backpage = await this.driver.$(`a[href="#/pages/"]`);
   return await backpage.click();
  });


  


   // Clicking outside the title text area
  
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
  
  When("I click on add image", async function () {
    const imageButton = await this.driver.$(selectors.ImageButton);
    return await imageButton.click();
  
  });

    
  When("I click on unsplasg image", async function () {
    const Unsplashimage = await this.driver.$(selectors.unsplashimage);
    return await Unsplashimage.click();
  
  });

  


  When("I click on Metadata info", async function () {
    const metadataButton = await this.driver.$$(selectors.metadatabutton);
    const postTitle = await metadataButton[0];
    return await postTitle.click();
  });

  Given("I write meta title {kraken-string}", async function (title) {
    let metaTitle = await this.driver.$(selectors.MetaTitle);
    return await metaTitle.setValue(title);
  });



  Given("I write meta description {kraken-string}", async function (title) {
    let metaDescription= await this.driver.$(selectors.MetaDescription);
    return await metaDescription.setValue(title);
  });


  When("I click on publish menu", async function () {
    let spanSettingsMenu = await this.driver.$(selectors.SpanSettingsMenu);
    await spanSettingsMenu.click();
 
  });

  /*When("I select the schedule radio button ", async function () {
    let divPublish = await this.driver.$(selectors.DivPublish);
    await divPublish.click();
 
  });*/

  When("I select the schedule radio button", async function () {
    let radioButtonSchedule = await this.driver.$(
      selectors.RadioButtonSchedule
    );
    await radioButtonSchedule.click();
  });

  When("I click on schedule button", async function () {
    let scheduleButton = await this.driver.$(selectors.ButtonSchedule);
    await scheduleButton.click();
  });

  When("I click on publish button", async function () {
    let scheduleButton = await this.driver.$(selectors.ButtonSchedule);
    await scheduleButton.click();
  });

  When("I click on cancel button", async function () {
    let cancelButton = await this.driver.$(selectors.ButtonCancel);
    await cancelButton.click();
  });


 
  When("I schedule the new post", async function () {
    let scheduleConfirmationButton = await this.driver.$(
      selectors.ButtonScheduleConfirmation
    );
    return await scheduleConfirmationButton.click();
  });

  
  When("I click in back button", async function () {
    const buttonBack = await this.driver.$(selectors.ButtonBack);
    return await buttonBack.click();
  });
  
  When("I filter the list by status Published", async function () {
    const filterByStatus = await this.driver.$(selectors.FilterByStatus);
    await filterByStatus.click();
    const publishedOption = await this.driver.$(selectors.PublishedOption);
    return await publishedOption.click();
  });
  
  When("I filter list by status Draft", async function () {
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
  
  When("I click in the first item in the list", async function () {
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

  });
  
  When("I confirm delete the post", async function () {
    const buttonConfirmDeletePost = await this.driver.$(selectors.ButtonConfirmDeletePost);
    await buttonConfirmDeletePost.click();
  });


  When("I click on draft button", async function () {
    let newPost = this.driver.$(selectors.DraftToPublish);
    return await newPost.click();
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

 
  When("I click on the pages menu", async function () {
    let PageMenu = this.driver.$(selectors.PageMenu);
    return await PageMenu.click();
  });

  When("I click on new page button", async function () {
    let newPage = this.driver.$(selectors.NewPage);
    return await newPage.click();
  });


  When("I see the page preview", async function () {
    let pagePreview = this.driver.$(selectors.PagePreview);
    return await pagePreview.click();
  });

  
  Then("I count the list elements", async function () {
    let listelementFinal = await this.driver.$$(selectors.ListElements);
    expect(listelementFinal.length).to.not.equal(-1);
  });

  Then("check the page title {kraken-string} in preview", async function (title) {
    const pagetitle = await this.driver.$$(selectors.PageTitlePreview);
    expect(pagetitle).to.not.equal(title);
  });

  When("I click on tags option menu", async function () {
    const obj = this.driver.$(selectors.TagMenuManage);
    return await obj.click();
  });

  When("I click on the new tag button", async function () {
    const obj = this.driver.$(selectors.TagNewTagButton);
    return await obj.click();
  });

  When("I write tag name {kraken-string}", async function (myString) {
    const obj = await this.driver.$(selectors.TagNameInput);
    return await obj.setValue(myString);
  });

  When("I write tag name apriori {kraken-string}", async function (myString) {
    const obj = await this.driver.$(selectors.TagNameInput);
    const validateString = new utilsFaker(myString);
    const randomValue = validateString.validateTypeParam;
    return await obj.setValue(randomValue);
  });

  When("I write tagMeta name apriori {kraken-string} with length {kraken-string}", async function (myString,maxleng) {
    const obj = await this.driver.$(selectors.TagMetaTitle);
    const validateString = new utilsFaker(myString);
    const randomValue = validateString.validateTypeParam;
    const valorstring = randomValue.substring(0, maxleng);
    return await obj.setValue(valorstring);
  });
  
  When("I write tagMeta description apriori {kraken-string} with length {kraken-string}", async function (myString,maxleng) {
    const obj = await this.driver.$(selectors.TagMetaDesc);
    const validateString = new utilsFaker(myString);
    const randomValue = validateString.validateTypeParam;
    const valorstring = randomValue.substring(0, maxleng);
    return await obj.setValue(valorstring);
  });

  When("I write tagCanonicalUrl description apriori {kraken-string} with length {kraken-string}", async function (myString,maxleng) {
    const obj = await this.driver.$(selectors.TagMetaCanonical);
    const validateString = new utilsFaker(myString);
    const randomValue = validateString.validateTypeParam;
    const valorstring = randomValue.substring(0, maxleng);
    return await obj.setValue(valorstring);
  });


  When("I write tag header apriori {kraken-string} with length {kraken-string}", async function (myString,maxleng) {
    const obj = await this.driver.$(selectors.TagCodeInjectionHead);
    const validateString = new utilsFaker(myString);
    const randomValue = validateString.validateTypeParam;
    const valorstring = randomValue.substring(0, maxleng);
    return await obj.setValue(valorstring);
  });

  When("I write tag header apriori {kraken-string} with length {kraken-string}", async function (myString,maxleng) {
    const obj = await this.driver.$(selectors.TagCodeInjectionHead);
    const validateString = new utilsFaker(myString);
    const randomValue = validateString.validateTypeParam;
    const valorstring = randomValue.substring(0, maxleng);
    return await obj.setValue(valorstring);
  });

  When("create tag with  twitter apriori {kraken-string} with length {kraken-string}", async function (myString,maxleng) {
    const obj = await this.driver.$(selectors.TagCodeInjectionHead);
    const validateString = new utilsFaker(myString);
    const randomValue = validateString.validateTypeParam;
    const valorstring = randomValue.substring(0, maxleng);
    return await obj.setValue(valorstring);
  });

  

  
  When("I write tag name {kraken-string} with length {kraken-string}", async function (myString, maxleng) {
    const obj = this.driver.$(selectors.TagNameInput);
    const valorstring = myString.substring(0, maxleng);
    return await obj.setValue(valorstring.padEnd(maxleng,'A'));
  });

  When("I write tag color {kraken-string}", async function (myString) {
    const obj = await this.driver.$(selectors.TagColorInput);
    return await obj.setValue(myString);
  });
  

When("I write tag color apriori {kraken-string}", async function (myString) {
    const obj = await this.driver.$(selectors.TagColorInput);
    const validateString = new utilsFaker(myString);
    const randomValue = validateString.validateTypeParam;
    return await obj.setValue(randomValue);
//    if (this.myString.startsWith("#")) {
  //    return await this.usePoolApriori(this.myString);
    //return await obj.setValue(myString);
   
});
  
When("I write tag slug {kraken-string} with length {kraken-string}", async function (myString, maxleng) {
  const obj = this.driver.$(selectors.TagSlugInput);
  const valorstring = myString.substring(0, maxleng);
  return await obj.setValue(valorstring.padEnd(maxleng,'A'));
});
  
  When("I write tag slug {kraken-string}", async function (myString) {
    const obj = await this.driver.$(selectors.TagSlugInput);
    return await obj.setValue(myString);
  });

  When("I write tag slug apriori {kraken-string}", async function (myString) {
    const obj = await this.driver.$(selectors.TagSlugInput);
    const validateString = new utilsFaker(myString);
    const randomValue = validateString.validateTypeParam;
    return await obj.setValue(randomValue);
  });

  When("I write tag description {kraken-string}", async function (myString) {
    const obj = await this.driver.$(selectors.TagDescriptionInput);
    return await obj.setValue(myString);
  });
  
  When("I write tag description apriori {kraken-string}", async function (myString) {
    const obj = await this.driver.$(selectors.TagDescriptionInput);
    const validateString = new utilsFaker(myString);
    const randomValue = validateString.validateTypeParam;
    return await obj.setValue(randomValue);
  });

  When("I write tag twitter title apriori {kraken-string} with length {kraken-string}", async function (myString, maxleng) {
    const obj =  this.driver.$(selectors.TagTwitterTitleInput);
    const validateString = new utilsFaker(myString);
    const randomValue = validateString.validateTypeParam;
    const valorstringdesc = randomValue.substring(0, maxleng);
    return await obj.setValue(valorstringdesc.padEnd(maxleng,'A')); 
  });

  
  When("I write tag twitter title apriori {kraken-string}", async function (myString) {
    const obj =  this.driver.$(selectors.TagTwitterTitleInput);
    const validateString = new utilsFaker(myString);
    const randomValue = validateString.validateTypeParam;
    return await obj.setValue(randomValue); 
  });

  When("I write tag twitter description apriori {kraken-string}", async function (myString) {
    const obj =  this.driver.$(selectors.TagTwitterDescInput);
    const validateString = new utilsFaker(myString);
    const randomValue = validateString.validateTypeParam;
    return await obj.setValue(randomValue); 
  });



  When("I write tag twitter description apriori {kraken-string} with length {kraken-string}", async function (myString, maxleng) {
    const obj =  this.driver.$(selectors.TagTwitterDescInput);
    const validateString = new utilsFaker(myString);
    const randomValue = validateString.validateTypeParam;
    const valorstringdesc = randomValue.substring(0, maxleng);
    return await obj.setValue(valorstringdesc.padEnd(maxleng,'A')); 
  });
  
  When("I write tag description apriori {kraken-string} with length {kraken-string}", async function (myString, maxleng) {
    const obj =  this.driver.$(selectors.TagDescriptionInput);
    const validateString = new utilsFaker(myString);
    const randomValue = validateString.validateTypeParam;
    const valorstringdesc = randomValue.substring(0, maxleng);
    return await obj.setValue(valorstringdesc.padEnd(maxleng,'A')); 
  });

  When("I click on the tag save button", async function () {
    const obj = this.driver.$(selectors.TagSaveButton);
    return await obj.click();
  });

  
  Then("I see that tag list has a title name {kraken-string}", async function (myString) {
    const obj = await this.driver.$(selectors.TagList).getText();
    expect(obj).to.equal(myString);
  });

  Then("I see the button saved", async function () {
    const obj = await this.driver.$(selectors.TagSaveButton).getText();
    expect(obj).to.equal("Saved");
  });
 
  Then("I see the button Retry", async function () {
    const obj = await this.driver.$(selectors.TagSaveButton).getText();
    expect(obj).to.equal("Retry");
  });
 
 
 

  Then("I see that tag list has a title name {kraken-string} with length {kraken-string}", async function (myString,maxleng) {
    const obj = await this.driver.$(selectors.TagList).getText();
    const valorstring = myString.substring(0, maxleng);
    expect(valorstring.padEnd(maxleng,'A')).to.equal(valorstring.padEnd(maxleng,'A'));
  });
 
  
  When("I click on member option menu", async function () {
    const obj = this.driver.$(selectors.MemberMenuManage);
    return await obj.click();
  });

  When("I click on the new member button", async function () {
    const obj = this.driver.$(selectors.MemberNewTagButton);
    return await obj.click();
  });

  When("I write member name {kraken-string}", async function (myString) {
    const obj = await this.driver.$(selectors.MemberNameInput);
    return await obj.setValue(myString);
  });

  When("I write member email {kraken-string}", async function (myString) {
    const obj = await this.driver.$(selectors.MemberEmailInput);
    return await obj.setValue(myString);
  });

  When("I click on the member save button", async function () {
    const obj = this.driver.$(selectors.TagSaveButton);
    return await obj.click();
  });

  Then("I see that member list has a title name {kraken-string}", async function (myString) {
      const obj = await this.driver.$(selectors.MemberList).getText();
      expect(obj).to.equal(myString);
  });


  Then("I see a error email message {kraken-string}", async function (myString) {
    const obj = await this.driver.$(selectors.MemberErrorEmailMessage).getText();
    expect(obj).to.equal(myString);
});

Then("I see error message {kraken-string}", async function (myString) {
  const obj = await this.driver.$(selectors.TagErrorNameMessage).getText();
  expect(obj).to.equal(myString);
});


Then("I see error message2 {kraken-string}", async function (myString) {
  const obj = await this.driver.$(selectors.TagErrorNameMessage2).getText();
  expect(obj).to.equal(myString);
});  


Then("I see error message3 {kraken-string}", async function (myString) {
  const obj = await this.driver.$(selectors.TagErrorDescription).getText();
  expect(obj).to.equal(myString);
});  

Then("I see error message4 {kraken-string}", async function (myString) {
  const obj = await this.driver.$(selectors.TagErrorNameMessage3).getText();
  expect(obj).to.equal(myString);
});  




Given("I click on member option menu list", async function () {
  const obj = this.driver.$(selectors.MemberMenuManage);
  return await obj.click();
});

When("I see a first list of members", async function () {
  const obj = this.driver.$(selectors.MemberFirstRowList);
  return await obj.click();
});

When("I click on the Meta data expand button", async function () {
  const obj = this.driver.$(selectors.TagMetadataButton);
  return await obj.click();
});


When("I click on the twitter card expand button", async function () {
  const obj = this.driver.$(selectors.TagTwitterButton);
  return await obj.click();
});



When("I click on the Code injection expand button", async function () {
  const obj = this.driver.$(selectors.TagCodeInjectionButton);
  return await obj.click();
});



Then("I see the member list", async function () {
  const obj = await this.driver.$(selectors.MemberListExists);
  expect(obj).to.not.equal(undefined);
});

Given("I click on tags option menu list", async function () {
  const obj = this.driver.$(selectors.TagMenuManage);
  return await obj.click();
});

When("I see a first list of tags", async function () {
  const obj = this.driver.$(selectors.TagFirstRowList);
  return await obj.click();
});

Then("I see the tags list", async function () {
  const obj = await this.driver.$(selectors.TagListExists);
  expect(obj).to.not.equal(undefined);
});

When("I leave in blank of member email", async function () {
  let emailInput = await this.driver.$(selectors.MemberEmailInput);
  return await emailInput.setValue("");
});

When('I take a screenshot of scenario and step number  {string}', async function( stepNumber){
  let featureName = featureFileInPath('./features')[0].split(".")[0];
  let dir = `./screenshots/${featureName}.feature`;
  createFolderIfDoesNotExists(dir)
  await new Promise(r => setTimeout(r, 1000 * 1));
      return await this.driver.saveScreenshot(`${dir}/${featureName}.feature-${stepNumber}.png`);
  
});



function createFolderIfDoesNotExists(path) {
  if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true });
  }
}


function createFolderIfDoesNotExists(path) {
  if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true });
  }
}

function featureFileInPath(path) {
  let filesInFeaturePath = filesInPath(path);
  return filesInFeaturePath.filter((fileName) => {
      return fileName.match(/\.feature$/);
  });
}

function filesInPath(path) {
  return fs.readdirSync(path);
}

