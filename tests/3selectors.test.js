// const { test } = require('@playwright/test');
import { test } from '@playwright/test';


test('selectors test', async ({ page }) => {
  // Go to page
  await page.goto('https://google.com');
  
  // Type in textbox
  // getById
  await page.locator('#APjFqb').fill("mesut");

  // getByRole
  //await page.getByRole('combobox').fill("mesut");
  //await page.getByRole('combobox', { name: 'Search' }).fill("mesut");
  //await page.getByRole('combobox', { title: 'Search' }).fill("mesut");
  await page.waitForTimeout(500);
  await page.keyboard.press('Escape');

  // Search Button Click
  // getByLabel
  //await page.getByLabel('Google 検索').nth(1).click();

  // getByText
  //await page.getByText('Google 検索').nth(1).click();

  // getByCSS
  // await page.locator('input[value="Google 検索"]').first().click();
  // await page.locator('input[value="Google 検索"]:visible').click();
  // await page.locator('input[value="Google 検索"][name="btnK"]:visible').click();
  // await page.locator('input.gNO89b[value="Google 検索"][name="btnK"]:visible').click();
  await page.locator('div input.gNO89b[value="Google 検索"][name="btnK"]:visible').click();

  // OR
  // await page.locator('[value="Google 検索"], [name="btnK"]').click();
  await page.waitForTimeout(500); // Waits for .5 seconds
});
