const { test } = require('@playwright/test');
const {globalHook } = require("./hooks")

test.beforeAll(async () => {
  console.log('Before all tests');
  test.info().annotations.push({type: "myType", description: "description"});
});

test.afterAll(async () => {
  console.log('After all tests');
});

test.beforeEach(async () => {
  console.log('Before each tests');
  if (test.info().title.includes("skip"))
    test.skip();
});

test.afterEach(async () => {
  console.log('After each tests');
});

test.describe("my suite", () => {
  test('test1 skip', async () => {

  });

  test('test info', async () => {
    console.log(test.info().config.metadata.myKey);
    console.log(test.info().annotations[0].description);
  });
})