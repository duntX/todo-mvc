// spec: specs/todomvc-basic-operation.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Basic Todo Operations', () => {
  test('Filter todos (All, Active, Completed)', async ({ page }) => {
    // 1. Navigate to the main page
    await page.goto('http://localhost:8080');

    // 2. Add two todos
    const newTodoInput = page.getByTestId('text-input');
    await newTodoInput.fill('First todo');
    await newTodoInput.press('Enter');
    await newTodoInput.fill('Second todo');
    await newTodoInput.press('Enter');

    // 3. Complete one
    await page.getByRole('listitem').filter({ hasText: 'First todo' }).getByTestId('todo-item-toggle').click();

    // 4. Click 'Active' filter
    await page.getByRole('link', { name: 'Active' }).click();
    // 5. Verify only active todos are shown
    await expect(page.getByText('Second todo')).toBeVisible();
    await expect(page.getByText('First todo')).not.toBeVisible();

    // 6. Click 'Completed' filter
    await page.getByRole('link', { name: 'Completed' }).click();
    // 7. Verify only completed todos are shown
    await expect(page.getByText('First todo')).toBeVisible();
    await expect(page.getByText('Second todo')).not.toBeVisible();

    // 8. Click 'All' filter
    await page.getByRole('link', { name: 'All' }).click();
    // 9. Verify all todos are shown
    await expect(page.getByText('First todo')).toBeVisible();
    await expect(page.getByText('Second todo')).toBeVisible();
  });
});
