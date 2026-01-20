// spec: specs/todomvc-basic-operation.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Basic Todo Operations', () => {
  test('Rapid entry of multiple todos', async ({ page }) => {
    // 1. Navigate to the main page
    await page.goto('http://localhost:8080');

    // 2. Quickly add several todos in succession
    const todos = ['Task 1', 'Task 2', 'Task 3'];
    const newTodoInput = page.getByTestId('text-input');
    for (const todo of todos) {
      await newTodoInput.fill(todo);
      await newTodoInput.press('Enter');
    }

    // Assert: All todos are added and visible in the list
    for (const todo of todos) {
      await expect(page.getByText(todo)).toBeVisible();
    }
  });
});
