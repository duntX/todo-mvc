// spec: specs/todomvc-basic-operation.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Basic Todo Operations', () => {
  test('Add a new todo item', async ({ page }) => {
    // 1. Navigate to the TodoMVC React app main page
    await page.goto('http://localhost:8080');

    // 2. Type 'Buy milk' into the new todo input and press Enter
    const newTodoInput = page.getByTestId('text-input');
    await newTodoInput.fill('Buy milk');
    await newTodoInput.press('Enter');

    // Assert: A new todo item labeled 'Buy milk' appears in the list
    await expect(page.getByText('Buy milk')).toBeVisible();
    // Assert: The input is cleared
    await expect(newTodoInput).toHaveValue('');
  });
});
