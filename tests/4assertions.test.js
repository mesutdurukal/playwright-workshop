const { test, expect } = require('@playwright/test');

test('assertions test', async ({ page }) => {
  await page.goto('https://google.com');
  const title = await page.title();
  expect(title).toContain('Google');
  await page.locator("textArea.gLFyf").fill("mesut");
});
