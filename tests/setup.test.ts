import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

test('portfolio directory exists', async () => {
  const portfolioPath = path.join(__dirname, '..', 'portfolio');
  expect(fs.existsSync(portfolioPath)).toBe(true);
});
