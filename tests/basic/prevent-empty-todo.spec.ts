// spec: specs/todomvc-basic-operation.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from "@playwright/test";

test.describe("Basic Todo Operations", () => {
	test("Prevent adding empty todo", async ({ page }) => {
		// 1. Navigate to the main page
		await page.goto("http://localhost:8080");

		// 2. Attempt to add a todo with only spaces or empty input
		const newTodoInput = page.getByTestId("text-input");
		await newTodoInput.fill(" ");
		await newTodoInput.press("Enter");

		// Assert: No new todo is added
		// There should be no listitem present
		await expect(page.locator("li")).toHaveCount(0);
		// Assert: Input remains empty or whitespace (implementation may trim or not)
		const inputValue = await newTodoInput.inputValue();
		expect(inputValue.trim()).toBe("");
	});
});
