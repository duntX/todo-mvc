// spec: specs/todomvc-basic-operation.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Basic Todo Operations', () => {
  test('Edit a todo item', async ({ page }) => {
    // 1. Navigate to the main page
    await page.goto('http://localhost:8080');

    // 2. Add a new todo
    const newTodoInput = page.getByTestId('text-input');
    await newTodoInput.fill('Edit me');
    await newTodoInput.press('Enter');

    // 3. Double-click the todo label to enter edit mode
    const todoLabel = page.getByTestId('todo-item-label');
    await todoLabel.dblclick({ button: 'left' });

    // 4. Change the text and press Enter
    const editInput = page.getByTestId('todo-item').getByTestId('text-input');
    await editInput.fill('Edited todo');
    await editInput.press('Enter');

    // Assert: Todo text is updated in the list
    await expect(page.getByText('Edited todo')).toBeVisible();
  });
});
