// const { test } = require('@playwright/test');
import { test } from '@playwright/test';

test.beforeAll(async () => {
  console.log('Global Before all');
});

test.afterAll(async () => {
  console.log('Global After all');
});

test.beforeEach(async () => {
  console.log('Global Before each');
});

test.afterEach(async () => {
  console.log('Global After each');
});