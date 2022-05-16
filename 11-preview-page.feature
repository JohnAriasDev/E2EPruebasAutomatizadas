Feature:  see the  preview page

@user1 @web
Scenario: see the  preview page 
Given I navigate to page "<URL_GHOST>"
 And I take a screenshot of scenario and step number  "0"
 And I write my email "<ADMIN_EMAIL>"
 And I enter password "<ADMIN_PASSWORD>"
 And I take a screenshot of scenario and step number  "1"
 And I click on the login button
 And I take a screenshot of scenario and step number  "2"
 And I wait for 2 seconds
 And I click on the pages menu
 And I take a screenshot of scenario and step number  "3"
 And I wait for 2 seconds
 And I take a screenshot of scenario and step number  "4"
 And I click on new page button
 And I wait for 2 seconds
 And I take a screenshot of scenario and step number  "5"
 When I write "NewPagegrupo36" in the page title
 And I wait for 2 seconds
 And I take a screenshot of scenario and step number  "6"
 And I click in back page button
 And I wait for 4 seconds
 And I take a screenshot of scenario and step number  "7"
 And I click in back page button
 And I wait for 2 seconds
 And I take a screenshot of scenario and step number  "8"
 And I filter list by status Draft
 And I wait for 1 seconds
 And I take a screenshot of scenario and step number  "9"
 Then I see that the first post in the list has title "NewPagegrupo36"
 And I wait for 2 seconds
 And I take a screenshot of scenario and step number  "10"
 And I click in the first item in the list
 And I wait for 2 seconds
 And I take a screenshot of scenario and step number  "11"
 And I see the page preview
 And I wait for 4 seconds
 And I take a screenshot of scenario and step number  "12"
 Then check the page title "NewPagegrupo36" in preview