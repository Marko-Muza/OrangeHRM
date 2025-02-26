import { Page, Locator } from "@playwright/test";

export class LoginPage {
  private readonly page: Page;
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly validUsername: string;
  private readonly validPassword: string;

  constructor(page: Page, validUsername: string, validPassword: string) {
    this.page = page;
    this.usernameInput = page.getByRole("textbox", { name: "Username" });
    this.passwordInput = page.getByRole("textbox", { name: "Password" });
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.validUsername = validUsername;
    this.validPassword = validPassword;
  }

  async login(username: string = this.validUsername, password: string = this.validPassword): Promise<void> {
    await this.page.goto("/web/index.php/auth/login");
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
