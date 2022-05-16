Feature: Create draft post

@user1 @web
Scenario: Create a post with image 
  Given I navigate to page "<URL_GHOST>"
  And I take a screenshot of scenario and step number  "0"
  And I write my email "<ADMIN_EMAIL>"
  And I enter password "<ADMIN_PASSWORD>"
  And I click on the login button
 And I take a screenshot of scenario and step number  "1"
  And I wait for 2 seconds
  When I click on the new post button
 And I take a screenshot of scenario and step number  "2"
  And I wait for 2 seconds
  And I write "prueba con imagen" in the post title
 And I take a screenshot of scenario and step number  "3"
  And I wait for 4 seconds
  And I click on add image 
 And I take a screenshot of scenario and step number  "4"
  And I wait for 4 seconds
  And I click on unsplasg image 
 And I take a screenshot of scenario and step number  "5"
  And I wait for 7 seconds
  And I click in back button
 And I take a screenshot of scenario and step number  "6"
  And I wait for 2 seconds
  And I filter list by status Draft
 And I take a screenshot of scenario and step number  "7"
  And I wait for 1 seconds
  Then I see that the first post in the list has title "prueba con imagen"
 And I take a screenshot of scenario and step number  "8"
  And I wait for 2 seconds