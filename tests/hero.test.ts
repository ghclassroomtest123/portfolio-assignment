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
  const hero = page.locator('[data-testid="hero-section"]');
  await hero.scrollIntoViewIfNeeded();
  await expect(hero).toBeVisible();
});