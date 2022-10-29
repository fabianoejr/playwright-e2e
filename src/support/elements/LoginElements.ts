import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class LoginElements extends BaseElements {
    constructor(readonly page: Page) {
        super(page);
        this.page = page;
    }

    getEmailField(): Locator {
        return this.page.locator('#email');
    }

    getPasswordField(): Locator {
        return this.page.locator('#password');
    }

    getLoginButton(): Locator {
        return this.page.locator('#btnLogin');
    }

    getValidateText(): Locator {
        return this.page.locator(
            'text=Carregando dados...'
        );
    }
}
