package Pages;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;

import static StepDefinition.HookTest.myDriver;

public class Checkout {

    Actions actions = new Actions(myDriver);
    JavascriptExecutor js = (JavascriptExecutor) myDriver;
    WebDriverWait wait = new WebDriverWait(myDriver,30);

    @FindBy(xpath = "//button[@name ='Submit']")
    public static WebElement AddToCart;

    @FindBy(xpath = "//a[@title ='Proceed to checkout']")
    public static WebElement ProceedToCheckout;

    @FindBy(xpath = "//td[@id ='total_product']")
    public static WebElement TotalProduct;

    @FindBy(xpath = "//span[@id ='product_price_5_19_0']")
    public static WebElement UnitPrice;

    @FindBy(xpath = "//button[@name = 'processAddress']")
    public static WebElement ProcessAddress;

    @FindBy(xpath = "//input[@id='cgv']")
    public static WebElement Terms;

    @FindBy(xpath = "//button[@name = 'processCarrier']")
    public static WebElement ProcessCarrier;

    @FindBy(xpath = "//a[@class ='bankwire']")
    public static WebElement Bankwire;

    @FindBy(xpath = "//div[@id = 'center_column']//button")
    public static WebElement ConfirmOrder;

    @FindBy(xpath = "//h1[@id ='cart_title']")
    public static WebElement ShoppingCart;

    @FindBy(xpath = "//div[@id ='layer_cart']//h2")
    public static List<WebElement> SuccessText;

    @FindBy(xpath = "//div[@id = 'center_column']//a[@title ='Proceed to checkout']")
    public static WebElement Proceed;

    @FindBy(xpath = "//div[@id = 'center_column']/h1")
    public static WebElement OrderConfirmation;

    public Checkout(WebDriver driver) {
        myDriver = driver;
        PageFactory.initElements(driver, this);
    }

    public void AddItemToCart(){
        actions.sendKeys(Keys.PAGE_DOWN).build().perform();
        AddToCart.click();
    }

    public String GetSuccessText() throws InterruptedException{
        Thread.sleep(5000);
        return SuccessText.get(0).getText();
    }

    public void ClickProceedToCheckout(){
        js.executeScript("arguments[0].click()",ProceedToCheckout);
        //ProceedToCheckout.click();
    }

    public boolean ShoppingCartSummary() throws InterruptedException{
        Thread.sleep(5000);
        String cartText = ShoppingCart.getText();
        if(cartText.contains("Your shopping cart")){
            return true;
        }
        return false;
    }

    public String GetTotalProduct(){
        actions.sendKeys(Keys.PAGE_DOWN).build().perform();
        return TotalProduct.getText();
    }

    public void ClickProceed(){
        actions.sendKeys(Keys.PAGE_DOWN).build().perform();
        js.executeScript("arguments[0].click()",Proceed);
    }

    public void ClickProcessAddress() throws InterruptedException{
        Thread.sleep(5000);
        actions.sendKeys(Keys.PAGE_DOWN).build().perform();
        js.executeScript("arguments[0].click()",ProcessAddress);
    }

    public void SelectTerms(){
        js.executeScript("arguments[0].click()",Terms);
    }

    public void ClickProcessCarrier(){
        actions.sendKeys(Keys.PAGE_DOWN).build().perform();
        js.executeScript("arguments[0].click()",ProcessCarrier);
    }

    public boolean PaymentPageDisplayed(){
        actions.sendKeys(Keys.PAGE_DOWN).build().perform();
        return Bankwire.isDisplayed();
    }

    public void ClickBankwire(){

        js.executeScript("arguments[0].click()",Bankwire);
    }

    public void ClickConfirmOrder(){
        actions.sendKeys(Keys.PAGE_DOWN).build().perform();
        js.executeScript("arguments[0].click()",ConfirmOrder);
    }

    public String OrderConfirmationDisplayed() throws InterruptedException{
        Thread.sleep(5000);
        String text = OrderConfirmation.getText();
        return text;
    }
}
