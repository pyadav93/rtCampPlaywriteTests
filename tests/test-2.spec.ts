import { test, expect } from '@playwright/test';
import { checkSortedPrice } from './utils';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="product-sort-container"]').selectOption('hilo');
  const prices=await page.$$('.inventory_item_price');
 const actualprices =await Promise.all(prices.map(async(prod, i)=>{
    return (await prod.innerText()).replace("$","")
   }))
   
  let  result =checkSortedPrice(actualprices);
  console.log(actualprices)
  console.log(result);
  expect(result).toBeTruthy();

 
});