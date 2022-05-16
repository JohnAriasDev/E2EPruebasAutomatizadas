  Feature:  View the tag list successfuly

@user1 @web
  Scenario: View the tag list successfuly
  Given I navigate to page "<URL_GHOST>"
  And I take a screenshot of scenario and step number  "0"
  And I write my email "<ADMIN_EMAIL>"
  And I enter password "<ADMIN_PASSWORD>"
  And I take a screenshot of scenario and step number  "1"
  And I click on the login button
  And I take a screenshot of scenario and step number  "2"
  And I wait for 2 seconds
  And I take a screenshot of scenario and step number  "3"
 When I click on tags option menu
  And I wait for 2 seconds
  And I take a screenshot of scenario and step number  "4"
  Then I see the tags list