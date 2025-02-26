import { Page, Locator } from "@playwright/test";

export class Navigation {
  private readonly adminMenuItem: Locator;
  private readonly PIMMenuItem: Locator;

  constructor(page: Page) {
    this.adminMenuItem = page.locator("a.oxd-main-menu-item", { hasText: "Admin" });
    this.PIMMenuItem = page.locator("a.oxd-main-menu-item", { hasText: "PIM" });
  }

  async openAdminPage(): Promise<void> {
    await this.adminMenuItem.click();
  }

  async openPIMPage(): Promise<void> {
    await this.PIMMenuItem.click();
  }
}
