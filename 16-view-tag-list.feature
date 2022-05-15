  Feature:  View the tag list successfuly

@user1 @web
  Scenario: View the tag list successfuly
  Given I navigate to page "http://localhost:2368/ghost/"
  And I write my email "<ADMIN_EMAIL>"
  And I enter password "<ADMIN_PASSWORD>"
  And I click on the login button
  And I wait for 2 seconds
  When I click on tags option menu
  And I wait for 2 seconds
  Then I see the tags list