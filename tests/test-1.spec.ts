import { test, expect } from '@playwright/test';
import { checkSortedProducts } from './utils';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="product-sort-container"]').selectOption('za')
 console.log(await page.locator(".inventory_item_name ").count());
 const products = await page.$$(".inventory_item_name "); 
     const   actualResult= await Promise.all(products.map(async(prod, i)=>{
          return await prod.innerText()
         }))
 let value= checkSortedProducts(actualResult);
expect(value).toBeTruthy();
 console.log(value);
});