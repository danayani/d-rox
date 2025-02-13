import { test, expect } from '@playwright/test';

test.use({ viewport: { width: 1480, height: 1200 } }); // Set a desktop viewport

test('Load first game card', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await expect(page.getByTestId('game-title').first()).toHaveText('App Survey Rewards - App Survey Rewards - App Survey Rewards');
    await expect(page.getByTestId('game-description').first()).toHaveText('Complete surveys and earn rewards. rewards.');
});

test('Check scroll', async ({ page }) => {
    const timeout = 5000

    await page.goto('http://localhost:3000/');
    await page.waitForTimeout(timeout); //make sure the page is loaded
    await page.getByTestId('load-games-button').click();

    const lastGameImg = page. locator('div').filter({ hasText: /^Local GuideShow tourists around your city for cash\.adventuresocial500$/ }).getByRole('img').first()

    while (!await lastGameImg.isVisible()) {
        await page.mouse.wheel(0, 100000);
        await page.waitForTimeout(timeout); //load feed
    }

    await expect(lastGameImg).toBeVisible();
});
