// Generated from: tests\UI_Test\feature\salesforce.feature
import { test } from "playwright-bdd";

test.describe('Validate automation page', () => {

  test.describe('Validate each country from dropdown', () => {

    test('Example #1', async ({ Given, When, Then, page }) => { 
      await Given('I launch test automation application page', null, { page }); 
      await When('I select "United States" from the country dropdown', null, { page }); 
      await Then('I should see the selected country displayed correctly', null, { page }); 
    });

    test('Example #2', async ({ Given, When, Then, page }) => { 
      await Given('I launch test automation application page', null, { page }); 
      await When('I select "Canada" from the country dropdown', null, { page }); 
      await Then('I should see the selected country displayed correctly', null, { page }); 
    });

    test('Example #3', async ({ Given, When, Then, page }) => { 
      await Given('I launch test automation application page', null, { page }); 
      await When('I select "United Kingdom" from the country dropdown', null, { page }); 
      await Then('I should see the selected country displayed correctly', null, { page }); 
    });

    test('Example #4', async ({ Given, When, Then, page }) => { 
      await Given('I launch test automation application page', null, { page }); 
      await When('I select "Germany" from the country dropdown', null, { page }); 
      await Then('I should see the selected country displayed correctly', null, { page }); 
    });

    test('Example #5', async ({ Given, When, Then, page }) => { 
      await Given('I launch test automation application page', null, { page }); 
      await When('I select "France" from the country dropdown', null, { page }); 
      await Then('I should see the selected country displayed correctly', null, { page }); 
    });

    test('Example #6', async ({ Given, When, Then, page }) => { 
      await Given('I launch test automation application page', null, { page }); 
      await When('I select "Australia" from the country dropdown', null, { page }); 
      await Then('I should see the selected country displayed correctly', null, { page }); 
    });

    test('Example #7', async ({ Given, When, Then, page }) => { 
      await Given('I launch test automation application page', null, { page }); 
      await When('I select "Japan" from the country dropdown', null, { page }); 
      await Then('I should see the selected country displayed correctly', null, { page }); 
    });

    test('Example #8', async ({ Given, When, Then, page }) => { 
      await Given('I launch test automation application page', null, { page }); 
      await When('I select "China" from the country dropdown', null, { page }); 
      await Then('I should see the selected country displayed correctly', null, { page }); 
    });

    test('Example #9', async ({ Given, When, Then, page }) => { 
      await Given('I launch test automation application page', null, { page }); 
      await When('I select "Brazil" from the country dropdown', null, { page }); 
      await Then('I should see the selected country displayed correctly', null, { page }); 
    });

    test('Example #10', async ({ Given, When, Then, page }) => { 
      await Given('I launch test automation application page', null, { page }); 
      await When('I select "India" from the country dropdown', null, { page }); 
      await Then('I should see the selected country displayed correctly', null, { page }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\UI_Test\\feature\\salesforce.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I launch test automation application page","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I select \"United States\" from the country dropdown","stepMatchArguments":[{"group":{"start":9,"value":"\"United States\"","children":[{"start":10,"value":"United States","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I should see the selected country displayed correctly","stepMatchArguments":[]}]},
  {"pwTestLine":14,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":15,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I launch test automation application page","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I select \"Canada\" from the country dropdown","stepMatchArguments":[{"group":{"start":9,"value":"\"Canada\"","children":[{"start":10,"value":"Canada","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I should see the selected country displayed correctly","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":12,"tags":[],"steps":[{"pwStepLine":21,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I launch test automation application page","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I select \"United Kingdom\" from the country dropdown","stepMatchArguments":[{"group":{"start":9,"value":"\"United Kingdom\"","children":[{"start":10,"value":"United Kingdom","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I should see the selected country displayed correctly","stepMatchArguments":[]}]},
  {"pwTestLine":26,"pickleLine":13,"tags":[],"steps":[{"pwStepLine":27,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I launch test automation application page","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I select \"Germany\" from the country dropdown","stepMatchArguments":[{"group":{"start":9,"value":"\"Germany\"","children":[{"start":10,"value":"Germany","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I should see the selected country displayed correctly","stepMatchArguments":[]}]},
  {"pwTestLine":32,"pickleLine":14,"tags":[],"steps":[{"pwStepLine":33,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I launch test automation application page","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I select \"France\" from the country dropdown","stepMatchArguments":[{"group":{"start":9,"value":"\"France\"","children":[{"start":10,"value":"France","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":35,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I should see the selected country displayed correctly","stepMatchArguments":[]}]},
  {"pwTestLine":38,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":39,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I launch test automation application page","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I select \"Australia\" from the country dropdown","stepMatchArguments":[{"group":{"start":9,"value":"\"Australia\"","children":[{"start":10,"value":"Australia","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":41,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I should see the selected country displayed correctly","stepMatchArguments":[]}]},
  {"pwTestLine":44,"pickleLine":16,"tags":[],"steps":[{"pwStepLine":45,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I launch test automation application page","stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I select \"Japan\" from the country dropdown","stepMatchArguments":[{"group":{"start":9,"value":"\"Japan\"","children":[{"start":10,"value":"Japan","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":47,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I should see the selected country displayed correctly","stepMatchArguments":[]}]},
  {"pwTestLine":50,"pickleLine":17,"tags":[],"steps":[{"pwStepLine":51,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I launch test automation application page","stepMatchArguments":[]},{"pwStepLine":52,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I select \"China\" from the country dropdown","stepMatchArguments":[{"group":{"start":9,"value":"\"China\"","children":[{"start":10,"value":"China","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":53,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I should see the selected country displayed correctly","stepMatchArguments":[]}]},
  {"pwTestLine":56,"pickleLine":18,"tags":[],"steps":[{"pwStepLine":57,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I launch test automation application page","stepMatchArguments":[]},{"pwStepLine":58,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I select \"Brazil\" from the country dropdown","stepMatchArguments":[{"group":{"start":9,"value":"\"Brazil\"","children":[{"start":10,"value":"Brazil","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":59,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I should see the selected country displayed correctly","stepMatchArguments":[]}]},
  {"pwTestLine":62,"pickleLine":19,"tags":[],"steps":[{"pwStepLine":63,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I launch test automation application page","stepMatchArguments":[]},{"pwStepLine":64,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I select \"India\" from the country dropdown","stepMatchArguments":[{"group":{"start":9,"value":"\"India\"","children":[{"start":10,"value":"India","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":65,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I should see the selected country displayed correctly","stepMatchArguments":[]}]},
]; // bdd-data-end