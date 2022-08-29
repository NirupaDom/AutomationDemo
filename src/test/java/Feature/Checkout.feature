Feature: Purchase an item

  @purchase
  Scenario: Add to cart and proceed to checkout
    Given User is on Automation practice website
      And user select signin button
      And user enter valid credentials "try2204@gmail.com" and "Welcome99"
      And user select Sign in
     When user search for "blue dress"
     Then list of blue dresses displayed
     When user add the first item to the cart
     Then product is successfully added to shopping cart is displayed
     When user select the proceed to checkout
     Then Shopping cart summary is displayed
      And Invoice value is verified
     When user select the proceed
      And process address is selected
      And choose terms of service checkbox for delivery method
      And process carrier is selected
     Then Payment Method page is displayed
     When user select the payment method
      And select the confirm order
     Then Order confirmation page is displayed
