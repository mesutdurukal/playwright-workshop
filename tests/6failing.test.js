// const { test } = require('@playwright/test');
import { test } from '@playwright/test';


test('selectors test2', async ({ page }) => {
  // Go to page
  await page.goto('https://google.com');
  await page.locator('#APjFqbdf').fill("mesut");
});
