$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/Feature/AddToWishlist.feature");
formatter.feature({
  "name": "Add a dress to wishlist",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "add to wishlist",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wishlist"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Automation practice website",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterSteps.User_is_on_Automation_practice_website()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d104.0.5112.102)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-CDFCV4P\u0027, ip: \u0027192.168.1.38\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.3.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 104.0.5112.102, chrome: {chromedriverVersion: 104.0.5112.79 (3cf3e8c8a07d..., userDataDir: C:\\Users\\nirup\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57964}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 1c331f41097fff3bb815a3c7f92f5a55\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat StepDefinition.RegisterSteps.User_is_on_Automation_practice_website(RegisterSteps.java:27)\r\n\tat ✽.User is on Automation practice website(file:src/test/java/Feature/AddToWishlist.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user select signin button",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.user_select_signin_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter valid credentials \"try2204@gmail.com\" and \"Welcome99\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_enter_valid_credentials_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user select Sign in",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_select_Sign_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user search for \"blue dress\"",
  "keyword": "When "
});
formatter.match({
  "location": "RegisterSteps.user_search_for_blue_dress(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "list of blue dresses displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.list_of_blue_dresses_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User select the fisrt dress to wish list",
  "keyword": "When "
});
formatter.match({
  "location": "RegisterSteps.user_select_the_fisrt_dress_to_wish_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Added to your wishlist msg is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.WishList_msg_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/Feature/Checkout.feature");
formatter.feature({
  "name": "Purchase an item",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add to cart and proceed to checkout",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@purchase"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Automation practice website",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterSteps.User_is_on_Automation_practice_website()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d104.0.5112.102)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-CDFCV4P\u0027, ip: \u0027192.168.1.38\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.3.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 104.0.5112.102, chrome: {chromedriverVersion: 104.0.5112.79 (3cf3e8c8a07d..., userDataDir: C:\\Users\\nirup\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57981}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 5f85b96946de8bed141656538eddad3b\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat StepDefinition.RegisterSteps.User_is_on_Automation_practice_website(RegisterSteps.java:27)\r\n\tat ✽.User is on Automation practice website(file:src/test/java/Feature/Checkout.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user select signin button",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.user_select_signin_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter valid credentials \"try2204@gmail.com\" and \"Welcome99\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_enter_valid_credentials_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user select Sign in",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_select_Sign_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user search for \"blue dress\"",
  "keyword": "When "
});
formatter.match({
  "location": "RegisterSteps.user_search_for_blue_dress(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "list of blue dresses displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.list_of_blue_dresses_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user add the first item to the cart",
  "keyword": "When "
});
formatter.match({
  "location": "CheckoutSteps.user_add_the_first_item_to_the_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "product is successfully added to shopping cart is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "CheckoutSteps.product_is_successfully_added_to_shopping_cart_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user select the proceed to checkout",
  "keyword": "When "
});
formatter.match({
  "location": "CheckoutSteps.user_select_the_proceed_to_checkout()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Shopping cart summary is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "CheckoutSteps.shopping_cart_summary_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Invoice value is verified",
  "keyword": "And "
});
formatter.match({
  "location": "CheckoutSteps.invoice_value_is_verified()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user select the proceed",
  "keyword": "When "
});
formatter.match({
  "location": "CheckoutSteps.user_select_the_proceed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "process address is selected",
  "keyword": "And "
});
formatter.match({
  "location": "CheckoutSteps.process_address_is_selected()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "choose terms of service checkbox for delivery method",
  "keyword": "And "
});
formatter.match({
  "location": "CheckoutSteps.choose_terms_of_service_checkbox_for_delivery_method()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "process carrier is selected",
  "keyword": "And "
});
formatter.match({
  "location": "CheckoutSteps.process_carrier_is_selected()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Payment Method page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "CheckoutSteps.payment_Method_page_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user select the payment method",
  "keyword": "When "
});
formatter.match({
  "location": "CheckoutSteps.user_select_the_payment_method()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "select the confirm order",
  "keyword": "And "
});
formatter.match({
  "location": "CheckoutSteps.selct_the_confirm_order()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Order confirmation page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "CheckoutSteps.order_confirmation_page_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/Feature/Login.feature");
formatter.feature({
  "name": "Login using the valid credentials",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Automation practice website",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterSteps.User_is_on_Automation_practice_website()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d104.0.5112.102)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-CDFCV4P\u0027, ip: \u0027192.168.1.38\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.3.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 104.0.5112.102, chrome: {chromedriverVersion: 104.0.5112.79 (3cf3e8c8a07d..., userDataDir: C:\\Users\\nirup\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58000}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 5e7f887b743d00b9db5b2adcd8a8fa18\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat StepDefinition.RegisterSteps.User_is_on_Automation_practice_website(RegisterSteps.java:27)\r\n\tat ✽.User is on Automation practice website(file:src/test/java/Feature/Login.feature:3)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Login into automation practice with valid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "user select signin button",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.user_select_signin_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "authentication page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.authentication_page_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter valid credentials \"try2204@gmail.com\" and \"Welcome99\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_enter_valid_credentials_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user select Sign in",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_select_Sign_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "account details page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.account_details_page_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/Feature/Register.feature");
formatter.feature({
  "name": "Create an account and signout",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Register and activate account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Register"
    }
  ]
});
formatter.step({
  "name": "User is on Automation practice website",
  "keyword": "Given "
});
formatter.step({
  "name": "user select signin button",
  "keyword": "And "
});
formatter.step({
  "name": "create an acccount page is displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "user enter valid email \"try36@gmail.com\" and select create an account",
  "keyword": "When "
});
formatter.step({
  "name": "user provide the personal information \"\u003cfirstname\u003e\" \"\u003clastname\u003e\" \"\u003cpassword\u003e\" \"\u003caddress\u003e\" \"\u003ccity\u003e\" \"\u003cstate\u003e\" \"\u003cpostcode\u003e\" \"\u003cphone\u003e\" \"\u003calias\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user click on register button",
  "keyword": "And "
});
formatter.step({
  "name": "account details page is displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "password",
        "address",
        "city",
        "state",
        "postcode",
        "phone",
        "alias"
      ]
    },
    {
      "cells": [
        "debbie",
        "mortimer",
        "Welcome99",
        "63 Barrossa way",
        "Edison",
        "New Jersey",
        "81345",
        "0017323334602",
        "home"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Register and activate account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Register"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Automation practice website",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterSteps.User_is_on_Automation_practice_website()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d104.0.5112.102)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-CDFCV4P\u0027, ip: \u0027192.168.1.38\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.3.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 104.0.5112.102, chrome: {chromedriverVersion: 104.0.5112.79 (3cf3e8c8a07d..., userDataDir: C:\\Users\\nirup\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58017}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: b47e64737d2d9837af8128b2ee599b69\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat StepDefinition.RegisterSteps.User_is_on_Automation_practice_website(RegisterSteps.java:27)\r\n\tat ✽.User is on Automation practice website(file:src/test/java/Feature/Register.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user select signin button",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.user_select_signin_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "create an acccount page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.create_an_acccount_page_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter valid email \"try36@gmail.com\" and select create an account",
  "keyword": "When "
});
formatter.match({
  "location": "RegisterSteps.user_enter_valid_email_and_select_create_an_account(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user provide the personal information \"debbie\" \"mortimer\" \"Welcome99\" \"63 Barrossa way\" \"Edison\" \"New Jersey\" \"81345\" \"0017323334602\" \"home\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.user_provide_the_personal_information(String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on register button",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.user_click_on_register_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "account details page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.account_details_page_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/Feature/Search.feature");
formatter.feature({
  "name": "Search for a dress",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "search",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@search"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Automation practice website",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterSteps.User_is_on_Automation_practice_website()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d104.0.5112.102)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-CDFCV4P\u0027, ip: \u0027192.168.1.38\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.3.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 104.0.5112.102, chrome: {chromedriverVersion: 104.0.5112.79 (3cf3e8c8a07d..., userDataDir: C:\\Users\\nirup\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58035}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 20d4a003d07d825d9094c8590219c064\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat StepDefinition.RegisterSteps.User_is_on_Automation_practice_website(RegisterSteps.java:27)\r\n\tat ✽.User is on Automation practice website(file:src/test/java/Feature/Search.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user search for \"blue dress\"",
  "keyword": "When "
});
formatter.match({
  "location": "RegisterSteps.user_search_for_blue_dress(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user select the first blue dress from list",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.user_select_the_first_blue_dress()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "blue dress is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.blue_dress_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});