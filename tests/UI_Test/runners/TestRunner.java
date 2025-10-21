package runners;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;


@CucumberOptions(
		features = "tests/UI_Test/features",
		glue = "tests/UI_Test/steps",
		plugin = {"pretty", /*"html:target/cucumber-reports/cucumber.html",*/     // 👈 generates standalone HTML
		        "json:target/cucumber.json"},
		monochrome=true/*,
				)
public class TestRunner extends AbstractTestNGCucumberTests {

}