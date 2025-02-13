import { test, expect, devices } from '@playwright/test';

test.use({ ...devices['iPhone 12'] }); // Emulate an iPhone 12

test('Load first game card', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await expect(page.getByTestId('game-title').first()).toHaveText('App Survey Rewards - App Survey Rewards - App Survey Rewards');
    await expect(page.getByTestId('game-description').first()).toHaveText('Complete surveys and earn rewards. rewards.');
});
