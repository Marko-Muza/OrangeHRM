import { Page, Locator } from "@playwright/test";

export class AdminPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}
