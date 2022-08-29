package StepDefinition;

import Pages.Loginpage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import junit.framework.Assert;

import static StepDefinition.HookTest.myDriver;

public class LoginSteps {

    Loginpage loginPage = new Loginpage(myDriver);

    @Given("user enter valid credentials {string} and {string}")
    public void user_enter_valid_credentials_and(String email, String pwd)  throws InterruptedException{
        //Thread.sleep(10000);
        loginPage.EmailInput(email);
        loginPage.PasswordInput(pwd);
    }

    @Given("user select Sign in")
    public void user_select_Sign_in() throws InterruptedException{
        loginPage.ClickSigninButton();
    }

    @Then("authentication page is displayed")
    public void authentication_page_is_displayed() {
       Assert.assertEquals("AUTHENTICATION",loginPage.AuthenticationExists());
    }

}
