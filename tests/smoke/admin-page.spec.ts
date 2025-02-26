import { test } from "../../fixtures/fixtures";

test.describe("Admin Page", () => {
  test("Login and navigate to Admin page", async ({ loginPage, navigation }) => {
    await loginPage.login();
    await navigation.openAdminPage();
  });
});
