import { Page, expect } from '@playwright/test';
import ContactElements from '../elements/ContactElements';
import BasePage from './BasePage';

export default class ContactPage extends BasePage {
  readonly ContactElements: ContactElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.ContactElements = new ContactElements(page);
  }

  async formContactFill(): Promise<void> {
    await this.ContactElements.getContactButton().click();
    await this.ContactElements.getEmailField().type(
      'fabianoeliasjunior@hotmail.com'
    );
    await this.ContactElements.getOrderField().type('123');
    await this.ContactElements.getMessageField().type(
      'E-mail enviado pelo teste de automatizado.'
    );
    await this.ContactElements.getSubjectField().selectOption('2');
    await this.ContactElements.getSendButton().click();
  }

  async validateMessage(): Promise<void> {
    await expect(this.ContactElements.getValidateText()).toHaveText(
      'Your message has been successfully sent to our team.'
    );
  }
}
