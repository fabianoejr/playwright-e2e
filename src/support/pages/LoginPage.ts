import { Page, expect } from '@playwright/test';
import LoginElements from '../elements/LoginElements';
import BasePage from './BasePage';

export default class ContactPage extends BasePage {
    readonly LoginElements: LoginElements;

    constructor(readonly page: Page) {
        super(page);
        this.page = page;
        this.LoginElements = new LoginElements(page);
    }

    async formContactFill(): Promise<void> {
        await this.LoginElements.getEmailField().type(
            'admin@admin'
        );
        await this.LoginElements.getPasswordField().type('.t5j7lmk4');
        await this.LoginElements.getLoginButton().click();
    }

    async validateMessage(): Promise<void> {
        await expect(this.LoginElements.getValidateText()).toHaveText(
            'Carregando dados...'
        );
    }
}
