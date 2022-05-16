Feature: Delete Scheduled post 

@user1 @web
Scenario: Delete Scheduled post 
Given I navigate to page "<URL_GHOST>"
 And I take a screenshot of scenario and step number  "0"
 And I write my email "<ADMIN_EMAIL>"
 And I enter password "<ADMIN_PASSWORD>"
 And I click on the login button
 And I take a screenshot of scenario and step number  "1"
 And I wait for 2 seconds
 And I click on the new post button
 And I take a screenshot of scenario and step number  "2"
 And I wait for 2 seconds
 And I click in back button
 And I take a screenshot of scenario and step number  "3"
 And I wait for 2 seconds
 And I filter posts by status Scheduled
 And I take a screenshot of scenario and step number  "4"
 And I wait for 2 seconds  
 And I click in the first item in the list
 And I take a screenshot of scenario and step number  "5"
 And I wait for 2 seconds
 And I open the post setting
 And I take a screenshot of scenario and step number  "6"
 And I wait for 2 seconds
 And I delete the post
 And I take a screenshot of scenario and step number  "7"
 And I wait for 2 seconds
 Then I count the list elements
 And I take a screenshot of scenario and step number  "8"
 And I wait for 2 seconds