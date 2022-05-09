Feature: Create a scheduled post

@user1 @web
Scenario: Create a scheduled post
  Given I navigate to page "http://localhost:2368/ghost/"
  And I write my email "<ADMIN_EMAIL>"
  And I enter password "<ADMIN_PASSWORD>"
  And I click on the login button
  And I wait for 2 seconds
  When I click on the new post button
  And I wait for 2 seconds
  And I write "scheduled post" in the post title
  And I schedule the new post
  And I wait for 2 seconds
  And I return to the posts list
  And I wait for 2 seconds
  And I filter posts by status Scheduled
  And I wait for 1 seconds
  Then I see that the first post in the list has title "scheduled post"
  And I wait for 2 seconds