Feature: Create a post with metadata

@user1 @web
Scenario: Create a post with metadata 
  Given I navigate to page "http://localhost:2368/ghost/"
  And I write my email "<ADMIN_EMAIL>"
  And I enter password "<ADMIN_PASSWORD>"
  And I click on the login button
  And I wait for 2 seconds
  When I click on the new post button
  And I wait for 2 seconds
  And I write "prueba con metadata" in the post title
  And I wait for 4 seconds
  And I click on add image 
  And I wait for 4 seconds
  And I click on unsplasg image 
  And I wait for 7 seconds
  And I open the post setting
  And I wait for 2 seconds
  And I click on Metadata info
  And I wait for 2 seconds
  And I write meta title "titulo metadato prueba"
  And I wait for 2 seconds
  And I write meta description "descipcion metadato prueba"
  And I wait for 2 seconds
  And I click in back button
  Then I see that the first post in the list has title "prueba con metadata"
  And I wait for 2 seconds
