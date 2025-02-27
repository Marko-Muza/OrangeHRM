import { Page, Locator } from "@playwright/test";

export class Navigation {
  private readonly navbarLocator: Locator;
  private readonly adminMenuItem: Locator;
  private readonly PIMMenuItem: Locator;

  constructor(page: Page) {
    this.navbarLocator = page.locator(".oxd-navbar-nav");
    this.adminMenuItem = this.navbarLocator.locator("a.oxd-main-menu-item[href*='viewAdminModule']");
    this.PIMMenuItem = this.navbarLocator.locator("a.oxd-main-menu-item[href*='viewPimModule']");
  }

  async openAdminPage(): Promise<void> {
    await this.adminMenuItem.click();
  }

  async openPIMPage(): Promise<void> {
    await this.PIMMenuItem.click();
  }
}
