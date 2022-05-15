Feature: Create a scheduled post

@user1 @web
Scenario: Create a scheduled post
  Given I navigate to page "<URL_GHOST>"
  And I write my email "<ADMIN_EMAIL>"
  And I enter password "<ADMIN_PASSWORD>"
  And I click on the login button
  And I wait for 2 seconds
  When I click on the new post button
  And I wait for 2 seconds
  And I write "scheduled post" in the post title
  And I wait for 4 seconds 
  And I click on publish menu
  And I wait for 2 seconds
  And I select the schedule radio button 
  And I wait for 1 seconds
  And I click on schedule button
  And I wait for 1 seconds
  And I schedule the new post
  And I wait for 1 seconds
  And I click in back button
  And I wait for 2 seconds
  And I filter posts by status Scheduled
  And I wait for 1 seconds
  Then I see that the first post in the list has title "scheduled post"
  And I wait for 2 seconds