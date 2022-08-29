package Pages;

import org.openqa.selenium.*;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;

import static StepDefinition.HookTest.myDriver;

public class Register {

    Actions actions = new Actions(myDriver);
    JavascriptExecutor js = (JavascriptExecutor) myDriver;
    WebDriverWait wait = new WebDriverWait(myDriver,30);
    @FindBy(xpath = "//input[@id='email_create']")
    public static WebElement emailInput;

    @FindBy(xpath = "//button[@id='SubmitCreate']")
    public static WebElement CreateButton;

    @FindBy(xpath = "//input[@id='create_account_error']")
    public static WebElement ErrorMessage;

    @FindBy(xpath = "//div[@id='uniform-id_gender2']")
    public static WebElement Title;

    @FindBy(xpath = "//input[@id='customer_firstname']")
    public static WebElement FirstName;

    @FindBy(xpath = "//input[@id='customer_lastname']")
    public static WebElement LastName;

    @FindBy(xpath = "//input[@id='passwd']")
    public static WebElement Password;

    @FindBy(xpath = "//input[@id='address1']")
    public static WebElement Address;

    @FindBy(xpath = "//input[@id='city']")
    public static WebElement City;

    @FindBy(xpath = "//select[@id='id_state']")
    public static WebElement State;

    @FindBy(xpath = "//input[@id='postcode']")
    public static WebElement Postcode;

    @FindBy(xpath = "//input[@id='phone_mobile']")
    public static WebElement Phone;

    @FindBy(xpath = "//input[@id='alias']")
    public static WebElement Alias;

    @FindBy(xpath = "//button[@id='submitAccount']")
    public static WebElement Register;

    @FindBy(xpath = "//input[@id='search_query_top']")
    public static WebElement SearchQuery;

    @FindBy(xpath = "//button[@name ='submit_search']")
    public static WebElement SearchButton;

    @FindBy(xpath = "//ul[@class ='product_list grid row']/li")
    public static List<WebElement> Product_list;

    @FindBy(xpath = "//ul[@id = 'color_to_pick_list']/li")
    public static List<WebElement> Color_list;

    @FindBy(xpath = "//img[@id ='bigpic']")
    public static WebElement DressImage;


    public Register(WebDriver driver) {
        myDriver = driver;
        PageFactory.initElements(driver, this);
    }

    public String pageTitle() {
        return myDriver.getTitle();
    }
    public void EnterEmailInput(String email) {
        emailInput.sendKeys(email);
    }
    public void ClickCreateButton()
    {
        actions.sendKeys(Keys.TAB).build().perform();
        js.executeScript("arguments[0].click()",CreateButton);
    }
     public void SelectMrsTitle(){ Title.click();}
     public void InputFirstName(String fname) { FirstName.sendKeys(fname);}
     public void InputLastName(String lname) { LastName.sendKeys(lname);}

     public void InputPassword(String pwd) { Password.sendKeys(pwd);}
     public void InputAddress(String add) { Address.sendKeys(add);}
     public void InputCity(String city) { City.sendKeys(city);}
     public void InputState(String state) { State.sendKeys(state);}
     public void InputPostCode(String pc) { Postcode.sendKeys(pc);}
     public void InputPhone(String phone) { Phone.sendKeys(phone);}
     public void ClearAliasText() { Alias.clear();}
     public void InputAlias(String alias) { Alias.sendKeys(alias);}

     public void ClickRegister(){
        js.executeScript("arguments[0].click()", Register);
     }
    public void SearchInput(String dress){
        SearchQuery.sendKeys(dress);
    }
    public void ClickSearchButton(){
        SearchButton.click();
    }

   public boolean ProductCount(){
        if (Product_list.size() > 0){
            return true;
        }
        else
            return false;
    }
    public void SelectToWishList() {

        actions.sendKeys(Keys.PAGE_DOWN).build().perform();

        for (WebElement list : Product_list) {
            WebElement blue = list.findElement(By.xpath("//img[@title ='Printed Summer Dress']"));
            js.executeScript("arguments[0].click()", blue);
            break;
        }
        wait.until(ExpectedConditions.visibilityOf(myDriver.findElement(By.xpath("//a[@id='wishlist_button']")))).click();
    }

    public boolean BlueDressDisplayed(){
       // js.executeScript("document.findElementById('bigpic').style.display"),"none");
        return DressImage.isDisplayed();
    }
    public String GetAddedToWishListMsg() throws InterruptedException{
        Thread.sleep(6000);
       WebElement fancyBoxMsg = myDriver.findElement(By.xpath("//div[@class ='fancybox-inner']"));
       return fancyBoxMsg.getText();

    }
    public void GetBlueDress() throws InterruptedException{
        Actions actions = new Actions(myDriver);
        actions.sendKeys(Keys.ARROW_DOWN).build().perform();
        JavascriptExecutor js = (JavascriptExecutor)myDriver;
        for(WebElement list : Product_list){
            WebElement blue= list.findElement(By.xpath("//img[@title ='Printed Summer Dress']"));
            js.executeScript("arguments[0].click()",blue);
            break;
        }
        for(WebElement color : Color_list){
            actions.sendKeys(Keys.ARROW_DOWN).build().perform();
            WebElement blue= color.findElement(By.xpath("//a[@name ='Blue']"));
            js.executeScript("arguments[0].click()",blue);
            break;
        }
    }


}
