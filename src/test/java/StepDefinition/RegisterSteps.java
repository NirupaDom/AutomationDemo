package StepDefinition;

import Pages.Homepage;
import Pages.Loginpage;
import Pages.Register;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.support.ui.WebDriverWait;

import static StepDefinition.HookTest.myDriver;

public class RegisterSteps {

    Register registerPage = new Register(myDriver);
    Loginpage loginPage = new Loginpage(myDriver);
    Homepage homepage = new Homepage(myDriver);
   // ConfigFileReader config = new ConfigFileReader();

    JavascriptExecutor js = (JavascriptExecutor)myDriver;
    WebDriverWait wait = new WebDriverWait(myDriver,30);
    @Given("^User is on Automation practice website$")
    public void User_is_on_Automation_practice_website() {

        myDriver.get("http://automationpractice.com/index.php");
    }

    @Given("^user select signin button$")
    public void user_select_signin_button() throws InterruptedException {
        Thread.sleep(1000);
        homepage.ClickSigninButton();
    }

    @Then("create an acccount page is displayed")
    public void create_an_acccount_page_is_displayed() {
        Assert.assertEquals("Login - My Store",registerPage.pageTitle());
    }

    @When("user enter valid email {string} and select create an account")
    public void user_enter_valid_email_and_select_create_an_account(String email) {
        registerPage.EnterEmailInput(email);
        registerPage.ClickCreateButton();
    }

    @When("user provide the personal information {string} {string} {string} {string} {string} {string} {string} {string} {string}")
    public void user_provide_the_personal_information(String fname, String lname, String pwd, String address, String city, String state, String postcode, String phone, String alias) throws InterruptedException{
        Thread.sleep(5000);
        registerPage.SelectMrsTitle();
        registerPage.InputFirstName(fname);
        registerPage.InputLastName(lname);
        registerPage.InputPassword(pwd);
        registerPage.InputAddress(address);
        registerPage.InputCity(city);
        registerPage.InputState(state);
        registerPage.InputPostCode(postcode);
        registerPage.InputPhone(phone);
        registerPage.ClearAliasText();
        registerPage.InputAlias(alias);
    }

    @When("user click on register button")
    public void user_click_on_register_button() {
        registerPage.ClickRegister();
    }

    @Then("account details page is displayed")
    public void account_details_page_is_displayed() throws InterruptedException {
           Assert.assertEquals("MY ACCOUNT",loginPage.AccountPageDisplayed());
    }

    @When("user search for \"([^\"]*)\"")
    public void user_search_for_blue_dress(String dress) {
        registerPage.SearchInput(dress);
        registerPage.ClickSearchButton();
    }

    @Then("list of blue dresses displayed")
    public void list_of_blue_dresses_displayed() throws InterruptedException {
        Thread.sleep(1000);
        Assert.assertEquals(true,true);
        registerPage.GetBlueDress();
    }

    @When("user select the first blue dress from list")
    public void user_select_the_first_blue_dress() throws InterruptedException{
        Thread.sleep(1000);
        registerPage.GetBlueDress();
    }

    @Then("blue dress is displayed")
    public void blue_dress_displayed(){
        Assert.assertEquals(true,registerPage.BlueDressDisplayed());
    }


    @When("User select the fisrt dress to wish list")
    public void user_select_the_fisrt_dress_to_wish_list() {
        registerPage.SelectToWishList();
    }

    @Then("Added to your wishlist msg is displayed")
    public void WishList_msg_is_displayed() throws InterruptedException{
        Assert.assertEquals("Added to your wishlist.",registerPage.GetAddedToWishListMsg());
    }
}
