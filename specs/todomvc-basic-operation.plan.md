# TodoMVC React Basic Operation Test Plan

## Application Overview

This test plan covers the core functionality and basic user flows of the TodoMVC React application, including adding, editing, completing, deleting, and filtering todos, as well as edge cases and error handling. Each scenario is independent and assumes a fresh application state.

## Test Scenarios

### 1. Basic Todo Operations

**Seed:** `tests/seed.spec.ts`

#### 1.1. Add a new todo item

**File:** `tests/basic/add-todo.spec.ts`

**Steps:**
  1. Navigate to the TodoMVC React app main page
  2. Type 'Buy milk' into the new todo input and press Enter

**Expected Results:**
  - A new todo item labeled 'Buy milk' appears in the list
  - The input is cleared

#### 1.2. Prevent adding empty todo

**File:** `tests/basic/prevent-empty-todo.spec.ts`

**Steps:**
  1. Navigate to the main page
  2. Attempt to add a todo with only spaces or empty input

**Expected Results:**
  - No new todo is added
  - Input remains empty

#### 1.3. Add a long todo item

**File:** `tests/basic/long-todo.spec.ts`

**Steps:**
  1. Navigate to the main page
  2. Add a todo with a very long string

**Expected Results:**
  - Long todo is added and displayed without breaking the UI

#### 1.4. Add a todo with special characters

**File:** `tests/basic/special-chars-todo.spec.ts`

**Steps:**
  1. Navigate to the main page
  2. Add a todo with special characters

**Expected Results:**
  - Todo with special characters is added and displayed correctly

#### 1.5. Complete a todo item

**File:** `tests/basic/complete-todo.spec.ts`

**Steps:**
  1. Add a new todo
  2. Click the checkbox to mark it as completed

**Expected Results:**
  - Todo is marked as completed (checkbox checked, style updated)

#### 1.6. Delete a todo item

**File:** `tests/basic/delete-todo.spec.ts`

**Steps:**
  1. Add a new todo
  2. Click the delete (×) button for the todo

**Expected Results:**
  - Todo is removed from the list

#### 1.7. Edit a todo item

**File:** `tests/basic/edit-todo.spec.ts`

**Steps:**
  1. Add a new todo
  2. Double-click the todo label to enter edit mode
  3. Change the text and press Enter

**Expected Results:**
  - Todo text is updated in the list

#### 1.8. Edit a todo to empty value

**File:** `tests/basic/edit-todo-empty.spec.ts`

**Steps:**
  1. Add a new todo
  2. Double-click to edit, clear the text, and press Enter

**Expected Results:**
  - Todo is deleted or edit is prevented

#### 1.9. Filter todos (All, Active, Completed)

**File:** `tests/basic/filter-todos.spec.ts`

**Steps:**
  1. Add two todos
  2. Complete one
  3. Click 'Active' filter
  4. Verify only active todos are shown
  5. Click 'Completed' filter
  6. Verify only completed todos are shown
  7. Click 'All' filter
  8. Verify all todos are shown

**Expected Results:**
  - Filters show correct todos for each state

#### 1.10. Toggle all todos as completed

**File:** `tests/basic/toggle-all.spec.ts`

**Steps:**
  1. Add two or more todos
  2. Click the 'Toggle All' checkbox

**Expected Results:**
  - All todos are marked as completed

#### 1.11. Clear completed todos

**File:** `tests/basic/clear-completed.spec.ts`

**Steps:**
  1. Add two todos
  2. Complete both
  3. Click 'Clear completed' button

**Expected Results:**
  - All completed todos are removed from the list

#### 1.12. Rapid entry of multiple todos

**File:** `tests/basic/rapid-entry.spec.ts`

**Steps:**
  1. Quickly add several todos in succession

**Expected Results:**
  - All todos are added and visible in the list
