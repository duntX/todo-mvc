// spec: specs/todomvc-basic-operation.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Basic Todo Operations', () => {
  test('Complete a todo item', async ({ page }) => {
    // 1. Navigate to the main page
    await page.goto('http://localhost:8080');

    // 2. Add a new todo
    const newTodoInput = page.getByTestId('text-input');
    await newTodoInput.fill('Complete me');
    await newTodoInput.press('Enter');

    // 3. Click the checkbox to mark it as completed
    const todoCheckbox = page.getByTestId('todo-item-toggle');
    await todoCheckbox.click();

    // Assert: Todo is marked as completed (checkbox checked, style updated)
    await expect(todoCheckbox).toBeChecked();
    // Optionally: check for completed style (e.g., line-through)
  });
});
