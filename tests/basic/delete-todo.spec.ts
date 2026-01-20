// spec: specs/todomvc-basic-operation.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from "@playwright/test";

test.describe("Basic Todo Operations", () => {
	test("Delete a todo item", async ({ page }) => {
		// 1. Navigate to the main page
		await page.goto("http://localhost:8080");

		// 2. Add a new todo
		const newTodoInput = page.getByTestId("text-input");
		await newTodoInput.fill("Delete me");
		await newTodoInput.press("Enter");

		// 3. Click the delete (×) button for the todo
		// Find the delete button next to the todo item text
		const todoItem = page.getByText("Delete me").locator("..");
		// Hover over the todo item to reveal the delete button
		await todoItem.hover();
		const deleteButton = todoItem.locator("button");
		await deleteButton.click();

		// Assert: Todo is removed from the list
		await expect(page.getByText("Delete me")).not.toBeVisible();
	});
});
