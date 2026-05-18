import { expect, test } from '@playwright/test';

test.describe('Navigation', () => {
    test('theme toggle switches data-theme attribute', async ({ page }) => {
        await page.goto('/');
        const html = page.locator('html');
        const initial = await html.getAttribute('data-theme');
        await page.getByRole('button', { name: /th[èe]me/i }).click();
        const next = await html.getAttribute('data-theme');
        expect(next).not.toBe(initial);
    });

    test('mobile menu opens and closes', async ({ page }) => {
        await page.setViewportSize({ width: 390, height: 844 });
        await page.goto('/');
        const burger = page.getByRole('button', { name: /menu/i });
        await burger.click();
        await expect(page.locator('#nav-links')).toHaveClass(/active/);
        await burger.click();
        await expect(page.locator('#nav-links')).not.toHaveClass(/active/);
    });

    test('case study pages are reachable', async ({ page }) => {
        await page.goto('/projets/simsar');
        await expect(page.getByRole('heading', { name: 'Simsar.ma' })).toBeVisible();
        await expect(page.getByText('Contexte', { exact: true })).toBeVisible();
        await expect(page.getByText('Résultats', { exact: true })).toBeVisible();
    });
});
