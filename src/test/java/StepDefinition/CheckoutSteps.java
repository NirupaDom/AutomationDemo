package StepDefinition;

import Pages.Checkout;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.support.ui.WebDriverWait;

import static StepDefinition.HookTest.myDriver;

public class CheckoutSteps {

    Checkout checkout = new Checkout(myDriver);

    JavascriptExecutor js = (JavascriptExecutor)myDriver;
    WebDriverWait wait = new WebDriverWait(myDriver,30);

    @When("user add the first item to the cart")
    public void user_add_the_first_item_to_the_cart() {
        checkout.AddItemToCart();
    }

    @Then("product is successfully added to shopping cart is displayed")
    public void product_is_successfully_added_to_shopping_cart_is_displayed() throws InterruptedException{
        Assert.assertEquals("Product successfully added to your shopping cart",checkout.GetSuccessText());
    }

    @When("user select the proceed to checkout")
    public void user_select_the_proceed_to_checkout() {
        checkout.ClickProceedToCheckout();
    }

    @Then("Shopping cart summary is displayed")
    public void shopping_cart_summary_is_displayed() throws InterruptedException{
        Assert.assertEquals(true,checkout.ShoppingCartSummary());
    }

    @Then("Invoice value is verified")
    public void invoice_value_is_verified() {
        Assert.assertEquals("$28.98",checkout.GetTotalProduct());
    }

    @When("user select the proceed")
    public void user_select_the_proceed() {
        checkout.ClickProceed();
    }

    @When("process address is selected")
    public void process_address_is_selected() throws InterruptedException {
        checkout.ClickProcessAddress();
    }

    @When("choose terms of service checkbox for delivery method")
    public void choose_terms_of_service_checkbox_for_delivery_method() {
        checkout.SelectTerms();
    }

    @When("process carrier is selected")
    public void process_carrier_is_selected() {
        checkout.ClickProcessCarrier();
    }

    @Then("Payment Method page is displayed")
    public void payment_Method_page_is_displayed() {
        Assert.assertEquals(true,checkout.PaymentPageDisplayed());
    }

    @When("user select the payment method")
    public void user_select_the_payment_method() {
        checkout.ClickBankwire();
    }

    @When("select the confirm order")
    public void selct_the_confirm_order() {
        checkout.ClickConfirmOrder();
    }

    @Then("Order confirmation page is displayed")
    public void order_confirmation_page_is_displayed() throws InterruptedException {
        Assert.assertEquals("ORDER CONFIRMATION",checkout.OrderConfirmationDisplayed());
    }


}
