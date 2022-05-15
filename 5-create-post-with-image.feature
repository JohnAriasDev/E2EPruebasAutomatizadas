Feature: Create draft post

@user1 @web
Scenario: Create a post with image 
  Given I navigate to page "<URL_GHOST>"
  And I write my email "<ADMIN_EMAIL>"
  And I enter password "<ADMIN_PASSWORD>"
  And I click on the login button
  And I wait for 2 seconds
  When I click on the new post button
  And I wait for 2 seconds
  And I write "prueba con imagen" in the post title
  And I wait for 4 seconds
  And I click on add image 
  And I wait for 4 seconds
  And I click on unsplasg image 
  And I wait for 7 seconds
  And I click in back button
  And I wait for 2 seconds
  And I filter list by status Draft
  And I wait for 1 seconds
  Then I see that the first post in the list has title "prueba con imagen"
  And I wait for 2 seconds