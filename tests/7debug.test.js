// const { test, expect } = require('@playwright/test');
import { test, expect } from '@playwright/test';

test('debug test', async ({ page }) => {
  await page.goto('https://google.com');
  debugger; // ⏸️ Execution pauses here
  await page.pause();
  const title = await page.title();
  debugger; // ⏸️ Execution pauses here
  await page.pause();
  expect(title).toContain('Google');
  debugger; // ⏸️ Execution pauses here
  await page.pause();
  await page.locator("textArea.gLFyf").fill("mesut");
});
