Feature: Delete Page

@user1 @web
 Scenario: Delete Page
 Given I navigate to page "<URL_GHOST>"
 And I take a screenshot of scenario and step number  "0"
 And I write my email "<ADMIN_EMAIL>"
 And I enter password "<ADMIN_PASSWORD>"
 And I take a screenshot of scenario and step number  "1"
 And I click on the login button
 And I wait for 2 seconds
 And I take a screenshot of scenario and step number  "2"
 And I click on the pages menu
 And I wait for 2 seconds
 And I take a screenshot of scenario and step number  "3"
 And I click in the first item in the list
 And I wait for 2 seconds 
 And I take a screenshot of scenario and step number  "4"
 And I open the post setting
 And I wait for 2 seconds
 And I take a screenshot of scenario and step number  "5"
 And I delete the post
 And I wait for 2 seconds
 And I take a screenshot of scenario and step number  "6"
 And I confirm delete the post
 And I wait for 2 seconds
 And I take a screenshot of scenario and step number  "7"
 Then I count the list elements
 And I wait for 2 seconds
 And I take a screenshot of scenario and step number  "8"
 