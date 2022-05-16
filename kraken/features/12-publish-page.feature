Feature: Publish Page

@user1 @web
Scenario: Publish Page
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
 And I filter list by status Draft
 And I wait for 1 seconds
 And I take a screenshot of scenario and step number  "4"
 And I click in the first item in the list
 And I wait for 2 seconds
 And I take a screenshot of scenario and step number  "5"
 And I click on publish menu
 And I wait for 2 seconds
 And I take a screenshot of scenario and step number  "6"
 When I click on publish button
 And I wait for 6 seconds
 And I take a screenshot of scenario and step number  "7"
 And I navigate to page "<URL_GHOST>"
 And I wait for 2 seconds
 And I take a screenshot of scenario and step number  "8"
 And I click on the pages menu
 And I wait for 2 seconds
 And I take a screenshot of scenario and step number  "9"
 And I filter the list by status Published
 And I take a screenshot of scenario and step number  "10"
 Then I see that the first post in the list has title "NewPagegrupo36"
 And I wait for 2 seconds
 And I take a screenshot of scenario and step number  "11"
 
