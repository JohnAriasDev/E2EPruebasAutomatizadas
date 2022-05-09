Feature: Delete Page

@user1 @web
 Scenario: Delete Page
 Given I navigate to page "http://localhost:2368/ghost/"
 And I write my email "<ADMIN_EMAIL>"
 And I enter password "<ADMIN_PASSWORD>"
 And I click on the login button
 And I wait for 2 seconds
 And I click on the pages menu
 And I wait for 2 seconds
 And I click in the first item in the list
 And I wait for 2 seconds 
 And I open the post setting
 And I wait for 2 seconds
 And I delete the post
 And I wait for 2 seconds
 Then I count the list elements
 And I wait for 2 seconds