Feature:  see the  preview page

@user1 @web
Scenario: see the  preview page 
Given I navigate to page "<URL_GHOST>"
 And I write my email "<ADMIN_EMAIL>"
 And I enter password "<ADMIN_PASSWORD>"
 And I click on the login button
 And I wait for 2 seconds
 And I click on the pages menu
 And I wait for 2 seconds
 And I click on new page button
 And I wait for 2 seconds
 When I write "NewPagegrupo36" in the page title
 And I wait for 2 seconds
 And I click in back page button
 And I wait for 4 seconds
 And I click in back page button
 And I wait for 2 seconds
 And I filter list by status Draft
 And I wait for 1 seconds
 Then I see that the first post in the list has title "NewPagegrupo36"
 And I wait for 2 seconds
 And I click in the first item in the list
 And I wait for 2 seconds
 And I see the page preview
 And I wait for 4 seconds
 Then check the page title "NewPagegrupo36" in preview