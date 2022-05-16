Feature: Publish a post in draft status

@user1 @web
Scenario: Publish a post in draft status
Given I navigate to page "<URL_GHOST>"
And I take a screenshot of scenario and step number  "0"
  And I write my email "<ADMIN_EMAIL>"
  And I enter password "<ADMIN_PASSWORD>"
  And I click on the login button
  And I take a screenshot of scenario and step number  "1"
  And I wait for 2 seconds 
  And I click on draft button  
  And I take a screenshot of scenario and step number  "2"
 And I click in the first item in the list
 And I take a screenshot of scenario and step number  "3"
  And I wait for 2 seconds
  And I publish the new post
 And I take a screenshot of scenario and step number  "4"
  And I wait for 2 seconds
  And I click in back button
 And I take a screenshot of scenario and step number  "5"
  And I wait for 2 seconds
 And I take a screenshot of scenario and step number  "6"
  And I filter the list by status Published
 And I take a screenshot of scenario and step number  "7"
  Then I see that the first post in the list has title "postgrupo36"
  And I wait for 2 seconds
