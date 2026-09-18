import testData from '../../test-data.json';
const { test, expect } = require('../../fixtures/walker_fixture.js');
const { heal } = require('../../fixtures/inline_healer.js');

test('{{TEST_NAME}} @sanity', async ({ page }) => {
  await page.goto(testData.url);
  await page.waitForLoadState('domcontentloaded');

  const usernameInput = () =>page.locator('input[aria-label="Enter your username or email addresss"]');

  const continueButton = () =>page.locator('button[aria-label="Continue"]');

  const passwordInput = () =>page.locator('input[aria-label="Password"]');

  const signInButton = () =>page.locator('#next');

  await heal(page, 'Username or email input', 'fill',testData.enterYourUsernameOrEmail, usernameInput);

  await heal(page, 'Continue button', 'click',null, continueButton);

  await heal(page, 'Password input', 'fill',testData.password, passwordInput);

  await heal(page, 'Sign in button', 'click',null, signInButton);

  await page.waitForLoadState('domcontentloaded');

  await heal(page, 'Client AB', 'click', null,() => page.locator('span').filter({ hasText: /^client AB$/ }).first());

  await heal(page, 'Order link', 'click', null,() => page.getByRole('link', { name: 'Order', exact: true }));

  await page.waitForTimeout(7000);

  await heal(page, 'New Order button', 'click', null,() => page.locator('[data-testid="order-list-new-button"]'));

  await heal(page, 'Stop 1 location dropdown', 'click', null,() => page.locator('xpath=//form[@id="stop-1-content-location"]/div[1]/div[1]/div[1]/button[@type="button"]'));

  await heal(page, 'Haldex Brake Products Corporation option', 'click', null,
    () => page.locator('li[aria-label="Haldex Brake Products Corporation"]'));

  await heal(page, 'Choose Date button', 'click', null,
    () => page.locator('button[aria-label="Choose Date"]').first());

  await heal(page, 'Date 19', 'click', null,
    () => page.locator('span').filter({ hasText: /^19$/ }).first());

  await heal(page, 'Stop 1 Appointment Required checkbox', 'check', null,
    () => page.locator('#stop-1-content-appointment-required'));

  await heal(page, 'Stop 2 location dropdown', 'click', null,
    () => page.locator('xpath=//form[@id="stop-2-content-location"]/div[1]/div[1]/div[1]/button[@type="button"]'));

  await heal(page, 'Novapath Supply Chain Systems option', 'click', null,
    () => page.locator('li[aria-label="Novapath Supply Chain Systems"]').first());

  await heal(page, 'Stop 2 Appointment Required checkbox', 'check', null,
    () => page.locator('#stop-2-content-appointment-required'));

  await heal(page, 'Line Item dropdown', 'click', null,
    () => page.locator('xpath=//div[@id="line-item-num-1-content"]//button[@type="button"]'));

  await heal(page, 'This is for testing option', 'click', null,
    () => page.locator('li[aria-label="some desc"]').first());
  await heal(page, 'Handling input', 'fill',testData.handlingInput,() => page.locator('#handling-0'));

  await heal(page, 'Weight input', 'fill',testData.weightInput,() => page.locator('#weight-0'));

  await heal(page, 'Bill To location dropdown', 'click', null,
    () => page.locator('xpath=//form[@id="bill-to-content-location"]/div[1]/div[1]/div[1]/button[@type="button"]'));

  await heal(page, 'Bill To Novapath option', 'click', null,
    () => page.locator('li[aria-label="Novapath Supply Chain Systems"]').first());

  await heal(page, 'Direction dropdown', 'click', null,
    () => page.locator('span[aria-label="Select Direction"]'));

  await heal(page, 'Inbound option', 'click', null,
    () => page.locator('li[aria-label="Inbound"]'));

  await heal(page, 'Billing Terms dropdown', 'click', null,
    () => page.locator('span[aria-label="Select Billing Terms"]'));

  await heal(page, '3rd Party option', 'click', null,
    () => page.locator('li[aria-label="3rd Party"]'));

  await heal(page, 'Internal Notes input', 'fill',
    testData.stop1ContentInternalNotes,
    () => page.locator('#internal-notes'));

  await heal(page, 'Customer Routed checkbox', 'check', null,
    () => page.locator('#customer-routed'));

  await heal(page, 'Create Order for client AB button', 'click', null,
    () => page.locator('button[aria-label="Create Order for client AB"]'));

  await page.waitForLoadState('domcontentloaded');
});