import { expect, test } from '@playwright/test';

test.describe('Login page', () => {
  test('@smoke @ui login page is available', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Contact List/i);
  });
});