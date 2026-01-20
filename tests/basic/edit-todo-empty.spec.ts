// spec: specs/todomvc-basic-operation.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Basic Todo Operations', () => {
  test('Edit a todo to empty value', async ({ page }) => {
    // 1. Navigate to the main page
    await page.goto('http://localhost:8080');

    // 2. Add a new todo
    const newTodoInput = page.getByTestId('text-input');
    await newTodoInput.fill('To be emptied');
    await newTodoInput.press('Enter');

    // 3. Double-click to edit
    const todoLabel = page.getByTestId('todo-item-label');
    await todoLabel.dblclick({ button: 'left' });

    // 4. Clear the text and press Enter
    const editInput = page.getByTestId('todo-item').getByTestId('text-input');
    await editInput.fill('');
    await editInput.press('Enter');

    // Assert: Todo is deleted or edit is prevented
    await expect(page.getByText('To be emptied')).not.toBeVisible();
  });
});
