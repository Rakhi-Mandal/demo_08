import testData from '../test-data.json';
import { test, expect } from '@playwright/test';

test('basic order flow @regression @sanity', async ({ page }) => {
  // Navigate to application
  await page.goto(testData.url);
  await page.waitForLoadState('domcontentloaded');

  // Username
  const usernameInput = page.locator('input[aria-label="Enter your username or email address"]');
  await expect(usernameInput).toBeVisible();
  await expect(usernameInput).toBeEditable();
  await usernameInput.fill(testData.enterYourUsernameOrEmail);
  await expect(usernameInput).toHaveValue(testData.enterYourUsernameOrEmail);

  // Continue
  const continueButton = page.locator('button[aria-label="Continue"]');
  await expect(continueButton).toBeVisible();
  await expect(continueButton).toBeEnabled();
  await continueButton.click();

  // Password
  const passwordInput = page.locator('input[aria-label="Password"]');
  await expect(passwordInput).toBeVisible();
  await expect(passwordInput).toBeEditable();
  await passwordInput.fill(testData.password);
  await expect(passwordInput).toHaveValue(testData.password);

  // Sign In
  const signInButton = page.locator('#next');
  await expect(signInButton).toBeVisible();
  await expect(signInButton).toBeEnabled();
  await signInButton.click();

  await page.waitForLoadState('domcontentloaded');

  // Client Selection
  const clientAbText = page.locator('span').filter({ hasText: /^client AB$/ }).first();
  await expect(clientAbText).toBeVisible();
  await expect(clientAbText).toBeEnabled();
  await clientAbText.click();

  // Order Menu
  const orderLink = page.getByRole('link', {name: 'Order',exact: true});
  await expect(orderLink).toBeVisible();
  await expect(orderLink).toBeEnabled();
  await orderLink.click();

  await page.waitForTimeout(7000);

  // New Order
  const newOrderButton = page.locator('[data-testid="order-list-new-button"]');
  await expect(newOrderButton).toBeVisible();
  await expect(newOrderButton).toBeEnabled();
  await newOrderButton.click();

  // Stop 1 Location
  const stop1LocationDropdown = page.locator('xpath=//form[@id="stop-1-content-location"]/div[1]/div[1]/div[1]/button[@type="button"]');
  await expect(stop1LocationDropdown).toBeVisible();
  await expect(stop1LocationDropdown).toBeEnabled();
  await stop1LocationDropdown.click();

  const stop1LocationOption = page.locator('li[aria-label="Haldex Brake Products Corporation"]');
  await expect(stop1LocationOption).toBeVisible();
  await expect(stop1LocationOption).toBeEnabled();
  await stop1LocationOption.click();

  // Stop 1 Date
  const stop1ChooseDateButton = page.locator('button[aria-label="Choose Date"]').first();
  await expect(stop1ChooseDateButton).toBeVisible();
  await expect(stop1ChooseDateButton).toBeEnabled();
  await stop1ChooseDateButton.click();

  const stop1Date = page.locator('span').filter({ hasText: /^19$/ }).first();
  await expect(stop1Date).toBeVisible();
  await expect(stop1Date).toBeEnabled();
  await stop1Date.click();

  // Stop 1 Appointment Required
  const stop1AppointmentRequired = page.locator('#stop-1-content-appointment-required');
  await stop1AppointmentRequired.check();
  await expect(stop1AppointmentRequired).toBeChecked();

  // Stop 2 Location
  const stop2LocationDropdown = page.locator('xpath=//form[@id="stop-2-content-location"]/div[1]/div[1]/div[1]/button[@type="button"]');
  await expect(stop2LocationDropdown).toBeVisible();
  await expect(stop2LocationDropdown).toBeEnabled();
  await stop2LocationDropdown.click();

  const stop2LocationOption = page.locator('li[aria-label="Novapath Supply Chain Systems"]').first();
  await expect(stop2LocationOption).toBeVisible();
  await expect(stop2LocationOption).toBeEnabled();
  await stop2LocationOption.click();

  const stop2AppointmentRequired = page.locator('#stop-2-content-appointment-required');
  await stop2AppointmentRequired.check();
  await expect(stop2AppointmentRequired).toBeChecked();

  // Line Item Description
  const lineItemDescriptionDropdown = page.locator('xpath=//div[@id="line-item-num-1-content"]//button[@type="button"]');
  await expect(lineItemDescriptionDropdown).toBeVisible();
  await expect(lineItemDescriptionDropdown).toBeEnabled();
  await lineItemDescriptionDropdown.click();

   const lineItemDescriptionOption = page.locator('li[aria-label="some desc"]').first();
  await expect(lineItemDescriptionOption).toBeVisible();
  await expect(lineItemDescriptionOption).toBeEnabled();
  await lineItemDescriptionOption.click();

  // Handling
  const handlingInput = page.locator('#handling-0');
  await expect(handlingInput).toBeVisible();
  await expect(handlingInput).toBeEditable();
  await handlingInput.fill(testData.handlingInput);

  // Weight
  const weightInput = page.locator('#weight-0');
  await expect(weightInput).toBeVisible();
  await expect(weightInput).toBeEditable();
  await weightInput.fill(testData.weightInput);

  // Bill To
  const billToDropdown = page.locator('xpath=//form[@id="bill-to-content-location"]/div[1]/div[1]/div[1]/button[@type="button"]');
  await expect(billToDropdown).toBeVisible();
  await expect(billToDropdown).toBeEnabled();
  await billToDropdown.click();

  const billToOption = page.locator('li[aria-label="Novapath Supply Chain Systems"]').first();
  await expect(billToOption).toBeVisible();
  await expect(billToOption).toBeEnabled();
  await billToOption.click();

  // Direction
  const directionDropdown = page.locator('span[aria-label="Select Direction"]');
  await expect(directionDropdown).toBeVisible();
  await expect(directionDropdown).toBeEnabled();
  await directionDropdown.click();

  const directionOption = page.locator('li[aria-label="Inbound"]');
  await expect(directionOption).toBeVisible();
  await expect(directionOption).toBeEnabled();
  await directionOption.click();

  // Billing Terms
  const billingTermsDropdown = page.locator('span[aria-label="Select Billing Terms"]');
  await expect(billingTermsDropdown).toBeVisible();
  await expect(billingTermsDropdown).toBeEnabled();
  await billingTermsDropdown.click();

  const billingTermsOption = page.locator('li[aria-label="3rd Party"]');
  await expect(billingTermsOption).toBeVisible();
  await expect(billingTermsOption).toBeEnabled();
  await billingTermsOption.click();

  // Internal Notes
  const internalNotesTextarea = page.locator('#internal-notes');
  await expect(internalNotesTextarea).toBeVisible();
  await expect(internalNotesTextarea).toBeEditable();
  await internalNotesTextarea.fill(testData.stop1ContentInternalNotes);
  await expect(internalNotesTextarea).toHaveValue(testData.stop1ContentInternalNotes);

  // Customer Routed
  const customerRoutedCheckbox = page.locator('#customer-routed');
  await customerRoutedCheckbox.check();
  await expect(customerRoutedCheckbox).toBeChecked();

  // Create Order
  const createOrderButton = page.locator('button[aria-label="Create Order for client AB"]');
  await expect(createOrderButton).toBeVisible();
  await expect(createOrderButton).toBeEnabled();
  await createOrderButton.click();

  await page.waitForLoadState('domcontentloaded');
});