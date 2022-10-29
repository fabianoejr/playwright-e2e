import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import LoginPage from '../support/pages/LoginPage';

test.describe('Login na Plataforma', () => {
  let loginPage: LoginPage;
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.base_url')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto(BASE_URL);
  });

  test('Logar na Plataforma', async () => {
    await loginPage.formContactFill();
    await loginPage.validateMessage();
  });
});
