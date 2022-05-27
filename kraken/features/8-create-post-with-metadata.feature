Feature: Create a post with metadata

@user1 @web
Scenario: Create a post with metadata 
  Given I navigate to page "<URL_GHOST>"
  And I take a screenshot of scenario and step number  "0"
  And I write my email "<ADMIN_EMAIL>"
  And I enter password "<ADMIN_PASSWORD>"
  And I take a screenshot of scenario and step number  "1"
  And I click on the login button
  And I take a screenshot of scenario and step number  "2"
  And I wait for 2 seconds
  When I click on the new post button
  And I take a screenshot of scenario and step number  "3"
  And I wait for 2 seconds
  And I write "prueba con metadata" in the post title
  And I take a screenshot of scenario and step number  "4"
  And I wait for 4 seconds
  And I take a screenshot of scenario and step number  "5"
  And I click on add image 
  And I take a screenshot of scenario and step number  "6"
  And I wait for 4 seconds
  And I click on unsplasg image 
  And I take a screenshot of scenario and step number  "7"
  And I wait for 7 seconds
  And I take a screenshot of scenario and step number  "8"
  And I open the post setting
  And I take a screenshot of scenario and step number  "9"
  And I wait for 2 seconds
  And I click on Metadata info
  And I take a screenshot of scenario and step number  "10"
  And I wait for 2 seconds
  And I take a screenshot of scenario and step number  "11"
  And I write meta title "titulo metadato prueba"
  And I wait for 2 seconds
  And I take a screenshot of scenario and step number  "12"
  And I write meta description "descipcion metadato prueba"
  And I wait for 2 seconds
  And I take a screenshot of scenario and step number  "13"
  And I click in back button
  Then I see that the first post in the list has title "prueba con metadata"
  And I take a screenshot of scenario and step number  "14"
  And I wait for 2 seconds
