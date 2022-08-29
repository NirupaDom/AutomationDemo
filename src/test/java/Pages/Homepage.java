package Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import static StepDefinition.HookTest.myDriver;

public class Homepage {

    @FindBy(xpath = "//a[contains(text(),'Sign in')]")
    public static WebElement SignIn;


    public Homepage(WebDriver driver) {
        myDriver = driver;
        PageFactory.initElements(driver, this);
    }

    public String pageTitle() {
        return myDriver.getTitle();
    }

    public void ClickSigninButton() {
        SignIn.click();
    }

}
