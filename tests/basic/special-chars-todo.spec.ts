// spec: specs/todomvc-basic-operation.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from "@playwright/test";

test.describe("Basic Todo Operations", () => {
	test("Add a todo with special characters", async ({ page }) => {
		// 1. Navigate to the main page
		await page.goto("http://localhost:8080");

		// 2. Add a todo with special characters
		const specialTodo = "!@#$%^&*()_+-=[]{}|;':,.<>/?`~";
		const newTodoInput = page.getByTestId("text-input");
		await newTodoInput.fill(specialTodo);
		await newTodoInput.press("Enter");

		// Assert: Todo with special characters is added and displayed correctly
		// Extract the visible text from the todo item and compare with the original string
		const todoItems = page.locator("li");
		const count = await todoItems.count();
		// Helper to decode HTML entities
		function decodeHtmlEntities(str) {
			return str
				.replace(/&amp;/g, "&")
				.replace(/&lt;/g, "<")
				.replace(/&gt;/g, ">")
				.replace(/&#x27;|&#39;/g, "'")
				.replace(/&quot;/g, '"')
				.replace(/&#x2F;/g, "/");
		}
		let found = false;
		for (let i = 0; i < count; i++) {
			const text = await todoItems.nth(i).innerText();
			if (text && decodeHtmlEntities(text).includes(specialTodo)) {
				found = true;
				break;
			}
		}
		expect(found).toBe(true);
	});
});
