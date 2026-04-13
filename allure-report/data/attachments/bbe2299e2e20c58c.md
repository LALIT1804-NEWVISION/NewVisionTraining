# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: KT_session_13-04-2026.spec.ts >> Login and Add to Cart
- Location: tests\KT_session_13-04-2026.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.login-button')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - generic [ref=e5]:
    - generic [ref=e9]:
      - textbox "Username" [ref=e11]: standard_user
      - textbox "Password" [active] [ref=e13]: secret_sauce
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_user
        - text: locked_out_user
        - text: problem_user
        - text: performance_glitch_user
        - text: error_user
        - text: visual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Login and Add to Cart', async ({ page }) => {
  4  | 
  5  |     // Open website
  6  |     await page.goto('https://www.saucedemo.com');
  7  |     // id
  8  |     await page.locator('#user-name').fill('standard_user');
  9  |     // name
  10 |     await page.locator('[name="password"]').fill('secret_sauce');
  11 |     // class
> 12 |     await page.locator('.login-button').click();
     |                                         ^ Error: locator.click: Test timeout of 30000ms exceeded.
  13 |     //CSS 
  14 |     await page.locator('input#user-name').fill('standard_user');
  15 |     // XPath
  16 |     await page.locator('//input[@id="user-name"]').fill('standard_user');
  17 |     // getByPlaceholder
  18 |     await page.getByPlaceholder('Username').fill('standard_user');
  19 |     // getByLabel
  20 |     await page.getByLabel('Password').fill('secret_sauce');
  21 |     // getByRole
  22 |     await page.getByRole('button', { name: 'Login' }).click();
  23 |     // getByText
  24 |     await page.getByText('Sauce Labs Backpack').click();
  25 |     // getByTestId
  26 |     await page.getByTestId('add-to-cart-sauce-labs-backpack').click();
  27 | 
  28 | });
  29 | 
```