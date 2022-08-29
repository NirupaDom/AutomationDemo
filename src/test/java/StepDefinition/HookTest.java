package StepDefinition;


import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class HookTest {

    public static WebDriver myDriver;

    @Before
    public void beforeScenario(){
        System.setProperty("webdriver.chrome.driver","C:\\Users\\nirup\\IdeaProjects\\AutomationDemo\\src\\test\\java\\Utilities\\chromedriver.exe");
        myDriver = new ChromeDriver();
        myDriver.manage().window().maximize();
    }

    @After
    public void afterScenario(){
       // myDriver.quit();
    }
}
