Feature: Publish a post in draft status

@user1 @web
Scenario: Publish a post in draft status
Given I navigate to page "<URL_GHOST>"
  And I write my email "<ADMIN_EMAIL>"
  And I enter password "<ADMIN_PASSWORD>"
  And I click on the login button
  And I wait for 2 seconds 
  And I click on draft button  
  And I click in the first item in the list
  And I wait for 2 seconds
  And I publish the new post
  And I wait for 2 seconds
  And I click in back button
  And I wait for 2 seconds
  And I filter the list by status Published
  Then I see that the first post in the list has title "postgrupo36"
  And I wait for 2 seconds
