import { test as base } from '@playwright/test';

export class MyFixture {
    async fixture1(){
        console.log("Fixture 1")
    }
    async fixture2(){
        console.log("Fixture 2")
    }
    
}

export const test = base.extend({
    myFixt: async({}, use) => {
        const fixtureFile = new MyFixture();
        await fixtureFile.fixture1();
        await use(fixtureFile);
        await fixtureFile.fixture2();
    },
});