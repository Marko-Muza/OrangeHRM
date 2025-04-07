import { test as base, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { Navigation } from "../pages/Navigation";
import { AdminPage } from "../pages/AdminPage";
import { PimPage } from "../pages/PIMpage";

import dotenv from "dotenv";

dotenv.config();

export const test = base.extend<{
  loginPage: LoginPage;
  navigation: Navigation;
  adminPage: AdminPage;
  pimPage: PimPage;
}>({
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
  pimPage: async ({ page }, use) => {
    const firstname = process.env.ADD_EMPLOYEE_NAME;
    const middlename = process.env.ADD_EMPLOYEE_MIDDLE_NAME;
    const lastname = process.env.ADD_EMPLOYEE_LAST_NAME;
    const employeeid = process.env.ADD_EMPLOYEE_ID;
    const username = process.env.ADD_USER_NAME;
    const password = process.env.ADD_USER_PASS;

    if (!firstname || !middlename || !lastname || !employeeid || !username || !password) {
      throw new Error(
        `Missing environment variables: ${!firstname ? "ADD_EMPLOYEE_NAME" : ""} ${
          !middlename ? "ADD_EMPLOYEE_MIDDLE_NAME" : ""
        }${!lastname ? "ADD_EMPLOYEE_LAST_NAME" : ""}${!employeeid ? "ADD_EMPLOYEE_ID" : ""}${
          !username ? "ADD_USER_NAME" : ""
        }${!password ? "ADD_USER_PASSWORD" : ""}`
      );
    }
    const pimPage = new PimPage(page, firstname, middlename, lastname, employeeid, username, password);
    await use(pimPage);
  },
});

export { expect };
