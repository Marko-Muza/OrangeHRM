import { test } from "../../fixtures/fixtures";

test.describe("Admin Page", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.login();
  });

  test("Login and navigate to Admin page", async ({ navigation }) => {
    await navigation.openAdminPage();
  });
});
