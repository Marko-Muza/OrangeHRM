import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import dotenv from "dotenv";

dotenv.config();

const username = process.env.LOGIN_USER ?? "";
const password = process.env.LOGIN_PASS ?? "";

if (!username || !password) {
  throw new Error(
    `Missing environment variables: ${!username ? "LOGIN_USER" : ""} ${!password ? "LOGIN_PASS" : ""}`.trim()
  );
}

export const test = base.extend<{ loginPage: LoginPage }>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    await loginPage.login(username, password);
    await use(loginPage);
  },
});

export { expect } from "@playwright/test";
