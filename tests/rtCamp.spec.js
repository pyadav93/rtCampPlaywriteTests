import { test, expect } from '@playwright/test';
import { checkSortedProducts,checkSortedPrice } from './utils';

test('Verify the sorting order displayed for Z-A on the “All Items” page.', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="product-sort-container"]').selectOption('za');
  await page.waitForTimeout(5000);
 console.log(await page.locator(".inventory_item_name ").count());
 const products = await page.$$(".inventory_item_name "); 
     const   actualResult= await Promise.all(products.map(async(prod, i)=>{
          return await prod.innerText()
         }))
 let value= checkSortedProducts(actualResult);
expect(value).toBeTruthy();
 console.log(value);
 page.close();
});

test('Verify the price order (high-low) displayed on the “All Items” page', async ({ page }) => {
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
  
   page.close();
  });

  test('Add multiple items to the card and validate the checkout journey', async ({ page }) => {
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
    page.close();
  });