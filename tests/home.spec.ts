import { expect, test } from '@playwright/test';

test.describe('Home page', () => {
    test('renders hero and main CTA', async ({ page }) => {
        await page.goto('/');
        await expect(page).toHaveTitle(/Mehdi Loumrhari/);
        await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
        await expect(page.getByRole('link', { name: /Discuter de mon projet/i }).first()).toBeVisible();
    });

    test('exposes legal pages from footer', async ({ page }) => {
        await page.goto('/');
        const mentions = page.getByRole('link', { name: 'Mentions légales' });
        await expect(mentions).toBeVisible();
        await mentions.click();
        await expect(page).toHaveURL(/\/mentions-legales/);
        await expect(page.getByRole('heading', { name: 'Mentions légales' })).toBeVisible();
    });

    test('portfolio cards link to case study pages', async ({ page }) => {
        await page.goto('/');
        const firstCard = page.locator('a.portfolio-card').first();
        await firstCard.scrollIntoViewIfNeeded();
        await firstCard.click();
        await expect(page).toHaveURL(/\/projets\//);
        await expect(page.getByText('Stack & choix techniques')).toBeVisible();
    });
});
