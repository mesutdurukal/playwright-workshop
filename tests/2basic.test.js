// const { test } = require('@playwright/test');
import { test } from '@playwright/test';


test('basic test', async ({ page }) => {
  await page.goto('https://google.com');
});
