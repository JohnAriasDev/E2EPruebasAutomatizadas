Feature: Create draft post

@user1 @web
Scenario: Create a draft post successfully
  Given I navigate to page "http://localhost:2368/ghost/"
  And I write my email "<ADMIN_EMAIL>"
  And I enter password "<ADMIN_PASSWORD>"
  And I click on the login button
  And I wait for 2 seconds
  When I click on the new post button
  And I wait for 2 seconds
  And I write "postgrupo36" in the post title
  And I wait for 4 seconds
  And I return to the posts list
  And I wait for 2 seconds
  And I filter posts by status Draft
  And I wait for 1 seconds
  Then I see that the first post in the list has title "postgrupo36"
  And  I click in the first post in the list
  And I wait for 2 seconds
  And I publish the new post
  And I wait for 2 seconds
  And I return to the posts list
  And I wait for 2 seconds
  And I filter posts by status Published
  Then I see that the first post in the list has title "postgrupo36"
  And I wait for 2 seconds


# Scenario: Delete latest post 
# Given I navigate to page "http://localhost:2368/ghost/"
#  And I write my email "<ADMIN_EMAIL>"
#  And I enter password "<ADMIN_PASSWORD>"
#  And I click on the login button
#  And I wait for 2 seconds
#  And I click on the new post button
#  And I wait for 2 seconds
#  And I return to the posts list
#  And I wait for 2 seconds
#  And I click in the first post in the list
#  And I wait for 2 seconds
#  And I open the post setting
#  And I wait for 2 seconds
#  And I delete the post
#  And I wait for 2 seconds
