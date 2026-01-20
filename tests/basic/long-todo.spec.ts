// spec: specs/todomvc-basic-operation.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Basic Todo Operations', () => {
  test('Add a long todo item', async ({ page }) => {
    // 1. Navigate to the main page
    await page.goto('http://localhost:8080');

    // 2. Add a todo with a very long string
    const longTodo = 'A very long todo item that exceeds normal length expectations to test UI handling and overflow behavior in the list display';
    const newTodoInput = page.getByTestId('text-input');
    await newTodoInput.fill(longTodo);
    await newTodoInput.press('Enter');

    // Assert: Long todo is added and displayed
    await expect(page.getByText(longTodo)).toBeVisible();
    // Optionally: check for UI breakage (e.g., no horizontal scroll, no overflow)
    // This can be extended with visual regression or bounding box checks if needed
  });
});
