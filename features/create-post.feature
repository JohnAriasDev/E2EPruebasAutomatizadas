Feature: Create draft post

@user1 @web
#Scenario: Create a draft post 
 # Given I navigate to page "http://localhost:2368/ghost/"
 # And I write my email "<ADMIN_EMAIL>"
 # And I enter password "<ADMIN_PASSWORD>"
 # And I click on the login button
 # And I wait for 2 seconds
 # When I click on the new post button
 # And I wait for 2 seconds
 # And I write "postgrupo36" in the post title
 # And I wait for 4 seconds
 # And I click in back button
 # And I wait for 2 seconds
 # And I filter list by status Draft
 # And I wait for 1 seconds
 # Then I see that the first post in the list has title "postgrupo36"
 # And I wait for 2 seconds

# Scenario: Publish a post in draft status
# Given I navigate to page "http://localhost:2368/ghost/"
#   And I write my email "<ADMIN_EMAIL>"
#   And I enter password "<ADMIN_PASSWORD>"
#   And I click on the login button
#   And I wait for 2 seconds 
#   And I click on draft button  
#   And I click in the first item in the list
#   And I wait for 2 seconds
#   And I publish the new post
#   And I wait for 2 seconds
#   And I click in back button
#   And I wait for 2 seconds
#   And I filter the list by status Published
#   Then I see that the first post in the list has title "postgrupo36"
#   And I wait for 2 seconds



# Scenario: Delete latest post 
# Given I navigate to page "http://localhost:2368/ghost/"
#  And I write my email "<ADMIN_EMAIL>"
#  And I enter password "<ADMIN_PASSWORD>"
#  And I click on the login button
#  And I wait for 2 seconds
#  And I click on the new post button
#  And I wait for 2 seconds
#  And I click in back button
#  And I wait for 2 seconds
#  And I click in the first item in the list
#  And I wait for 2 seconds
#  And I open the post setting
#  And I wait for 2 seconds
#  And I delete the post
#  And I wait for 2 seconds
#  Then I count the list elements
#  And I wait for 2 seconds
   


# Scenario: Create Page 
# Given I navigate to page "http://localhost:2368/ghost/"
#  And I write my email "<ADMIN_EMAIL>"
#  And I enter password "<ADMIN_PASSWORD>"
#  And I click on the login button
#  And I wait for 2 seconds
#  And I click on the pages menu
#  And I wait for 2 seconds
#  And I click on new page button
#  And I wait for 2 seconds
#  When I write "NewPagegrupo36" in the post title
#  And I wait for 4 seconds
#  And I click in back button
#  And I wait for 2 seconds
#  And I filter list by status Draft
#  And I wait for 1 seconds
#  Then I see that the first post in the list has title "NewPagegrupo36"
#  And I wait for 2 seconds

#Scenario: see the  preview page 
#Given I navigate to page "http://localhost:2368/ghost/"
 #And I write my email "<ADMIN_EMAIL>"
 #And I enter password "<ADMIN_PASSWORD>"
 #And I click on the login button
 #And I wait for 2 seconds
 #And I click on the pages menu
 #And I wait for 2 seconds
 #And I click on new page button
 #And I wait for 2 seconds
 #When I write "NewPagegrupo36" in the post title
 #And I wait for 4 seconds
 #And I click in back button
 #And I wait for 2 seconds
 #And I filter list by status Draft
 #And I wait for 1 seconds
 #Then I see that the first post in the list has title "NewPagegrupo36"
 #And I wait for 2 seconds
 #And I click in the first item in the list
 #And I wait for 2 seconds
 #And I see the page preview
 #And I wait for 4 seconds
 #Then check the page title "NewPagegrupo36" in preview


#  Scenario: Publish Page
# Given I navigate to page "http://localhost:2368/ghost/"
#  And I write my email "<ADMIN_EMAIL>"
#  And I enter password "<ADMIN_PASSWORD>"
#  And I click on the login button
#  And I wait for 2 seconds
#  And I click on the pages menu
#  And I wait for 2 seconds
#  And I filter list by status Draft
#  And I wait for 1 seconds
#  And I click in the first item in the list
#  And I wait for 2 seconds
#  And I see the page preview
#  And I wait for 4 seconds
#  When I publish the new post
#  And I wait for 2 seconds
#  And I click in back button
#  And I wait for 2 seconds
#  And I click in back button
#  And I wait for 2 seconds
#  And I filter the list by status Published
# Then I see that the first post in the list has title "NewPagegrupo36"
# And I wait for 2 seconds



#  Scenario: Delete Page
# Given I navigate to page "http://localhost:2368/ghost/"
#  And I write my email "<ADMIN_EMAIL>"
#  And I enter password "<ADMIN_PASSWORD>"
#  And I click on the login button
#  And I wait for 2 seconds
#  And I click on the pages menu
#  And I wait for 2 seconds
#  And I click in the first item in the list
#  And I wait for 2 seconds 
#  And I open the post setting
#  And I wait for 2 seconds
#  And I delete the post
#  And I wait for 2 seconds
#  Then I count the list elements
#  And I wait for 2 seconds
 
Scenario: Create a tag successfuly
  Given I navigate to page "http://localhost:2368/ghost/"
  And I write my email "<ADMIN_EMAIL>"
  And I enter password "<ADMIN_PASSWORD>"
  And I click on the login button
  And I wait for 2 seconds
  When I click on tags option menu
  And I click on the new tag button
  And I write name "Animals"
  And I write color "707070"
  And I write slug "animals"
  And I write description "Tags for animals"
  And I click on the save button
  And I wait for 4 seconds
  And I click on tags option menu
  Then I see that list has a title with name "Animals"