const { test } = require('@playwright/test');

test('basic test2', async ({ page }) => {
  await page.goto('https://google.com');
});
