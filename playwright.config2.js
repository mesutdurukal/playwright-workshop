// playwright.config.js
// const { defineConfig } = require('@playwright/test');
import { defineConfig } from '@playwright/test';

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
      use: {
        browserName: 'firefox',
        headless: false,
        channel: 'firefox',
        viewport: { width: 1920, height: 1080 },
        ignoreHTTPSErrors: true,
        video: 'on',
        screenshot: 'only-on-failure',
        trace: 'on',
        geolocation: { latitude: 48.8566, longitude: 2.3522 },
        permissions: ['geolocation'],
        locale: 'fr-FR',
        timezoneId: 'Europe/Paris',
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        colorScheme: 'dark',
        deviceScaleFactor: 2,
        isMobile: false,
        hasTouch: false,
        slowMo: 50,
        extraHTTPHeaders: { 'Authorization': 'Bearer mytoken' }
      }
    },
    {
      name: 'Chromium',
      use: {
        browserName: 'chromium',
        headless: true,
        channel: 'chrome', // Ensures it's Chrome-based Chromium
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: false,
        video: 'retain-on-failure',
        screenshot: 'on',
        trace: 'retain-on-failure',
        geolocation: { latitude: 37.7749, longitude: -122.4194 },
        permissions: ['clipboard-read', 'clipboard-write'],
        locale: 'en-US',
        timezoneId: 'America/Los_Angeles',
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
        colorScheme: 'light',
        deviceScaleFactor: 1,
        isMobile: true,
        hasTouch: true,
        slowMo: 100,
        extraHTTPHeaders: { 'X-Custom-Header': 'MyValue' }
      }
    },
    {
      name: 'Chrome',
      use: {
        browserName: 'chromium',
        channel: 'chrome', // Forces Playwright to use Google Chrome
        headless: false, // Run in headful mode
        viewport: { width: 1920, height: 1080 },
        ignoreHTTPSErrors: true,
        video: 'on',
        screenshot: 'on',
        trace: 'on',
        geolocation: { latitude: 40.7128, longitude: -74.0060 }, // New York
        permissions: ['notifications', 'camera'],
        locale: 'en-US',
        timezoneId: 'America/New_York',
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        colorScheme: 'dark',
        deviceScaleFactor: 2,
        isMobile: false,
        hasTouch: false,
        slowMo: 150,
        extraHTTPHeaders: { 'Custom-Header': 'Playwright-Test' }
      }
    },
    {
      name: 'WebKit',
      use: {
        browserName: 'webkit',
        headless: false,
        viewport: { width: 1366, height: 768 },
        ignoreHTTPSErrors: true,
        video: 'on',
        screenshot: 'on',
        trace: 'on',
        geolocation: { latitude: 51.5074, longitude: -0.1278 },
        // permissions: ['camera', 'microphone'],
        locale: 'en-GB',
        timezoneId: 'Europe/London',
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)',
        colorScheme: 'dark',
        deviceScaleFactor: 3,
        isMobile: true,
        hasTouch: true,
        slowMo: 200,
        extraHTTPHeaders: { 'Custom-Token': 'abcdef' }
      }
    }
  ]
  ,
});
