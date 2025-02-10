// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',  // Directory where test files are located
  timeout: 30 * 1000,     // Maximum time one test can run (in ms)
  retries: 2,         // Retries for flaky tests
  workers: 4,      // Run tests in parallel using 4 workers
  outputDir: './test-results',
  use: {
    headless: true,   // Run tests in headless mode
    viewport: { width: 1280, height: 720 }, // Browser window size
    video: 'on',     // Collect trace for debugging ('on' | 'off' | 'retain-on-failure' | 'on-first-retry')
    screenshot: 'on',     // Collect trace for debugging ('on' | 'off' | 'retain-on-failure' | 'on-first-retry')
    trace: 'on',     // Collect trace for debugging ('on' | 'off' | 'retain-on-failure' | 'on-first-retry')
  },
  projects: [
    {
      name: 'Firefox',
      use: { browserName: 'firefox' }
    }
  ],
});
