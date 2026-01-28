import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

test('index.css contains @theme {}', async () => {
  const cssPath = path.join(__dirname, '..', 'portfolio', 'src', 'index.css');
  const cssContent = fs.readFileSync(cssPath, 'utf-8');
  expect(cssContent).toContain('@theme {');
});
