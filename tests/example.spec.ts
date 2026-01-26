// import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });


import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  // Scroll to the bottom and then back to the top
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });
  // Wait for 1 second for any animations to trigger
  await page.waitForTimeout(1000);
  
  // Check if the sections are visible, scrolling to them if necessary
  const hero = page.locator('[data-testid="hero-section"]');
  await hero.scrollIntoViewIfNeeded();
  await expect(hero).toBeVisible();

  // The information and projects sections are lazy-loaded and wrapped in Suspense.
  // We'll use a longer timeout for the test to account for lazy loading.
  test.setTimeout(60000);

  const info = page.locator('[data-testid="information-section"]');
  await expect(info).toBeAttached({ timeout: 30000 });
  await info.scrollIntoViewIfNeeded();
  await expect(info).toBeVisible({ timeout: 30000 });

  const projects = page.locator('[data-testid="projects-section"]');
  await expect(projects).toBeAttached({ timeout: 30000 });
  await projects.scrollIntoViewIfNeeded();
  await expect(projects).toBeVisible({ timeout: 30000 });
});