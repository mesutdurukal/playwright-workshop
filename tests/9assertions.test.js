// const { test, expect } = require('@playwright/test');
import { test, expect } from '@playwright/test';

test('Multiple Assertions Example', async () => {
    const number = 42;
    const text = "Playwright is great!";
    const array = [1, 2, 3, 4, 5];
    const obj = { name: "Alice", age: 30 };

    // ✅ Number Assertions
    expect(number).toBe(42);
    expect(number).toBeGreaterThan(40);
    expect(number).toBeLessThan(50);

    // ✅ String Assertions
    expect(text).toBe("Playwright is great!");
    expect(text).toContain("Playwright");
    expect(text).toMatch(/great!/i);

    // ✅ Array Assertions
    expect(array).toContain(3);
    expect(array).toHaveLength(5);

    // ✅ Object Assertions
    expect(obj).toHaveProperty("name", "Alice");
    expect(obj).toHaveProperty("age");
    expect(obj.age).toBeGreaterThan(18);
});
