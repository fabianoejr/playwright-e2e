import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class ContactElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getContactButton(): Locator {
    return this.page.locator('#contact-link');
  }

  getSubjectField(): Locator {
    return this.page.locator('#id_contact');
  }

  getEmailField(): Locator {
    return this.page.locator('#email');
  }

  getOrderField(): Locator {
    return this.page.locator('#id_order');
  }

  getMessageField(): Locator {
    return this.page.locator('#message');
  }

  getSendButton(): Locator {
    return this.page.locator('#submitMessage');
  }

  getValidateText(): Locator {
    return this.page.locator(
      'text=Your message has been successfully sent to our team.'
    );
  }
}
