import { test as base } from '@playwright/test';
import { MyFixture } from './MyFixture';

const test = base.extend({
    myFixt: async({}, use) => {
        const fixtureFile = new MyFixture();
        await fixtureFile.fixture1();
        await use(fixtureFile);
        await fixtureFile.fixture2();
    },
});

test('test fixture', async ({myFixt}) => {
    console.log("hello")
});

  