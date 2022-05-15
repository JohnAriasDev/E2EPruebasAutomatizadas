Feature: Delete latest post

@user1 @web
Scenario: Delete latest post 
Given I navigate to page "<URL_GHOST>"
 And I write my email "<ADMIN_EMAIL>"
 And I enter password "<ADMIN_PASSWORD>"
 And I click on the login button
 And I wait for 2 seconds
 And I click on the new post button
 And I wait for 2 seconds
 And I click in back button
 And I wait for 2 seconds
 And I click in the first item in the list
 And I wait for 2 seconds
 And I open the post setting
 And I wait for 2 seconds
 And I delete the post
 And I wait for 2 seconds
 Then I count the list elements
 And I wait for 2 seconds
   