import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').fill('Poonam');
  await page.locator('[data-test="lastName"]').fill('Yadav');
  await page.locator('[data-test="postalCode"]').fill('201301');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
 let  successMessage=await page.locator('[data-test="complete-header"]').innerText();
 expect(successMessage).toEqual('Thank you for your order!');
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
  console.log('user has successfully logedout...')
});