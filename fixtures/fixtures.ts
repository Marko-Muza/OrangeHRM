import { test as base, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { Navigation } from "../pages/Navigation";
import { AdminPage } from "../pages/AdminPage";

import dotenv from "dotenv";

dotenv.config();

export const test = base.extend<{ loginPage: LoginPage; navigation: Navigation; adminPage: AdminPage }>({
  loginPage: async ({ page }, use) => {
    const username = process.env.LOGIN_USER;
    const password = process.env.LOGIN_PASS;

    if (!username || !password) {
      throw new Error(
        `Missing environment variables: ${!username ? "LOGIN_USER" : ""} ${!password ? "LOGIN_PASS" : ""}`
      );
    }

    const loginPage = new LoginPage(page, username, password);
    await use(loginPage);
  },

  navigation: async ({ page }, use) => {
    const navigation = new Navigation(page);
    await use(navigation);
  },

  adminPage: async ({ page }, use) => {
    const adminPage = new AdminPage(page);
    await use(adminPage);
  },
});

export { expect };
