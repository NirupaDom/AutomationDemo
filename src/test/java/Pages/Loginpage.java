package Pages;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import static StepDefinition.HookTest.myDriver;

public class Loginpage {

    Actions actions = new Actions(myDriver);

    @FindBy(xpath = "//input[@id ='email']")
    public static WebElement Email;

    @FindBy(xpath = "//input[@id ='passwd']")
    public static WebElement Password;

    @FindBy(xpath = "//button[@id ='SubmitLogin']")
    public static WebElement SubmitLogin;

    @FindBy(xpath = "//div[@id ='center_column']/h1")
    public static WebElement Authentication;

    public Loginpage(WebDriver driver) {
        myDriver = driver;
        PageFactory.initElements(driver, this);
    }

    public String pageTitle() {
        return myDriver.getTitle();
    }

    public void EmailInput(String email){Email.sendKeys(email);}
    public void PasswordInput(String pwd){Password.sendKeys(pwd);}
    public String AuthenticationExists()
    {
        return Authentication.getText();
    }

    public String AccountPageDisplayed() throws InterruptedException
    {
        return Authentication.getText();
    }

    public void ClickSigninButton() {

        actions.sendKeys(Keys.PAGE_DOWN).build().perform();
        WebDriverWait wait = new WebDriverWait(myDriver, 30);
        wait.until(ExpectedConditions.elementToBeClickable(SubmitLogin));
        SubmitLogin.click();
    }

}
