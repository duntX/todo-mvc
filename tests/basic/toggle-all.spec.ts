// spec: specs/todomvc-basic-operation.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Basic Todo Operations', () => {
  test('Toggle all todos as completed', async ({ page }) => {
    // 1. Navigate to the main page
    await page.goto('http://localhost:8080');

    // 2. Add two or more todos
    const newTodoInput = page.getByTestId('text-input');
    await newTodoInput.fill('First toggle');
    await newTodoInput.press('Enter');
    await newTodoInput.fill('Second toggle');
    await newTodoInput.press('Enter');

    // 3. Click the 'Toggle All' checkbox
    const toggleAll = page.getByTestId('toggle-all');
    await toggleAll.click();

    // Assert: All todos are marked as completed
    const allCheckboxes = await page.locator('[data-testid="todo-item-toggle"]');
    await expect(allCheckboxes.first()).toBeChecked();
    await expect(allCheckboxes.nth(1)).toBeChecked();
  });
});
