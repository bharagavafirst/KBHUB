import { chromium, expect, webkit } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { login } from '../pages/login.po'
import { console } from 'inspector';
const { Given, When, Then } = createBdd();

Given('I launch test automation application page', async ({  page }) => {
await page.goto('https://testautomationpractice.blogspot.com/');
});

When('I select {string} from the country dropdown', async ({ page }, country) => {
  const dropdown = await page.locator('#country'); // replace with actual selector
  await dropdown.selectOption({ label: country  });
  let dropname = await dropdown.selectOption({ label: country  });
  await dropdown.click();
 // await page.screenshot({path: "C:\\Users\\PK Bhargav\\aut\\dropdown.bpm"})

    });

Then('I should see the selected country displayed correctly', async function ({ page }) {
  const selectedValue = await page.locator('#country').inputValue();
  expect(selectedValue).toBeTruthy(); // basic validation that something is selected
  console.log(`Selected country: ${selectedValue}`);
});
