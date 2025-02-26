import { test } from "../../fixtures/fixtures";

test.describe("Admin Page", () => {
  test("Login and navigate to Admin page", async ({ loginPage, navigation }) => {
    await navigation.openAdminPage();
  });
});
