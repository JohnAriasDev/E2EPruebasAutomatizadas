Feature: Create page

@user1 @web
Scenario: Create Page 
Given I navigate to page "<URL_GHOST>"
 And I write my email "<ADMIN_EMAIL>"
 And I enter password "<ADMIN_PASSWORD>"
 And I click on the login button
 And I wait for 2 seconds
 And I click on the pages menu
 And I wait for 2 seconds
 And I click on new page button
 And I wait for 2 seconds
 When I write "NewPagegrupo36" in the post title
 And I wait for 4 seconds
 And I click in back button
 And I wait for 2 seconds
 And I filter list by status Draft
 And I wait for 1 seconds
 Then I see that the first post in the list has title "NewPagegrupo36"
 And I wait for 2 seconds
