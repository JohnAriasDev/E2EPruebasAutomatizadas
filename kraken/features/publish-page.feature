Feature: Publish Page

@user1 @web
Scenario: Publish Page
Given I navigate to page "<URL_GHOST>"
 And I write my email "<ADMIN_EMAIL>"
 And I enter password "<ADMIN_PASSWORD>"
 And I click on the login button
 And I wait for 2 seconds
 And I click on the pages menu
 And I wait for 2 seconds
 And I filter list by status Draft
 And I wait for 1 seconds
 And I click in the first item in the list
 And I wait for 2 seconds
 And I see the page preview
 And I wait for 4 seconds
 When I publish the new post
 And I wait for 2 seconds
 And I click in back button
 And I wait for 2 seconds
 And I click in back button
 And I wait for 2 seconds
 And I filter the list by status Published
Then I see that the first post in the list has title "NewPagegrupo36"
And I wait for 2 seconds

