import { test } from "../../fixtures/fixtures";

test.describe("Navigation Page", () => {
  test("Navigate", async ({ loginPage, navigation }) => {
    await navigation.openPIMPage();
  });
});
