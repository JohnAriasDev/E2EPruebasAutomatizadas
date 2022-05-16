Feature: Create page

@user1 @web
Scenario: Create Page 
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
 And I click on new page button
 And I wait for 2 seconds
 And I take a screenshot of scenario and step number  "4"
 When I write "NewPagegrupo36" in the page title
 And I take a screenshot of scenario and step number  "5"
 And I wait for 4 seconds
 And I take a screenshot of scenario and step number  "6"
 And I click in back page button
 And I take a screenshot of scenario and step number  "7"
 And I wait for 4 seconds
 And I take a screenshot of scenario and step number  "8"
 And I click in back page button
 And I take a screenshot of scenario and step number  "9"
 And I wait for 4 seconds
 And I take a screenshot of scenario and step number  "10"
 And I filter list by status Draft
 And I take a screenshot of scenario and step number  "11"
 And I wait for 1 seconds
 And I take a screenshot of scenario and step number  "12"
 Then I see that the first post in the list has title "NewPagegrupo36"
 And I take a screenshot of scenario and step number  "13"
 And I wait for 2 seconds
