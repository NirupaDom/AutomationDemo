package Runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features ="src/test/java/Feature",
        glue={"StepDefinition"},
        plugin = {"json:target/reports/CucumberReport.json",
                "pretty",
                "html:target/cucumber-reports"},

        tags = {"@Register, @Login, @search, @wishlist, @purchase"}

)


public class TestRunner {
}
