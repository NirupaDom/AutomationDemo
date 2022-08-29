Feature: Add a dress to wishlist

  @wishlist
  Scenario: add to wishlist
    Given User is on Automation practice website
      And user select signin button
      And user enter valid credentials "try2204@gmail.com" and "Welcome99"
      And user select Sign in
     When user search for "blue dress"
     Then list of blue dresses displayed
     When User select the fisrt dress to wish list
     Then Added to your wishlist msg is displayed
