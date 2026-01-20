// spec: specs/todomvc-basic-operation.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Basic Todo Operations', () => {
  test('Clear completed todos', async ({ page }) => {
    // 1. Navigate to the main page
    await page.goto('http://localhost:8080');

    // 2. Add two todos
    const newTodoInput = page.getByTestId('text-input');
    await newTodoInput.fill('First clear');
    await newTodoInput.press('Enter');
    await newTodoInput.fill('Second clear');
    await newTodoInput.press('Enter');

    // 3. Complete both
    await page.getByRole('listitem').filter({ hasText: 'First clear' }).getByTestId('todo-item-toggle').click();
    await page.getByRole('listitem').filter({ hasText: 'Second clear' }).getByTestId('todo-item-toggle').click();

    // 4. Click 'Clear completed' button
    await page.getByRole('button', { name: 'Clear completed' }).click();

    // Assert: All completed todos are removed from the list
    await expect(page.getByText('First clear')).not.toBeVisible();
    await expect(page.getByText('Second clear')).not.toBeVisible();
  });
});
