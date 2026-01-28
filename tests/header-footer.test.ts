import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  // Scroll to the bottom and then back to the top
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });
  // Wait for 1 second for any animations to trigger
  await page.waitForTimeout(1000);
  
  // Check if the sections are visible, scrolling to them if necessary
  const header = page.locator('[data-testid="header-section"]');
  await header.scrollIntoViewIfNeeded();
  await expect(header).toBeVisible();

  const footer = page.locator('[data-testid="footer-section"]');
  await footer.scrollIntoViewIfNeeded();
  await expect(footer).toBeVisible();
});