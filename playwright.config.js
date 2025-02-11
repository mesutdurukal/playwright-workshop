// playwright.config.js
// const { defineConfig } = require('@playwright/test');
import { defineConfig } from '@playwright/test';

module.exports = defineConfig({
  testDir: './tests',  // Directory where test files are located
  metadata: {myKey: "myValue"},
  timeout: 30 * 1000,     // Global test timeout: Maximum time one test can run (in ms)
  expect: {
    timeout: 5000, // Assertions timeout (5 sec)
  },
  retries: process.env.CI ? 2 : 0, // 2 retries in CI, 0 retries locally // Retries for flaky tests
  workers: 4,      // Run tests in parallel using 4 workers
  outputDir: './test-results',
  use: {
    headless: true,   // Run tests in headless mode
    viewport: { width: 1280, height: 720 }, // Browser window size
    video: 'on',     // Collect trace for debugging ('on' | 'off' | 'retain-on-failure' | 'on-first-retry')
    screenshot: 'on',     // Collect trace for debugging ('on' | 'off' | 'retain-on-failure' | 'on-first-retry')
    trace: 'on',     // Collect trace for debugging ('on' | 'off' | 'retain-on-failure' | 'on-first-retry')
    actionTimeout: 5000, // Default timeout for actions (click, fill, etc.)
    navigationTimeout: 8000, // Timeout for page.goto()
  },
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium', viewport: { width: 1280, height: 720 } }
    }
  ],
});
