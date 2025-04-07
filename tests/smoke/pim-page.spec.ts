import { test } from "../../fixtures/fixtures";

test.describe("PIM Page", () => {
  test.beforeEach(async ({ loginPage, navigation }) => {
    await loginPage.login();
    await navigation.openPIMPage();
  });

  test("Click on Add button to add new employee on the PIM page", async ({ pimPage }) => {
    await pimPage.clickAddEmployee();
  });

  test("Fill out the form to create a new employee", async ({ pimPage }) => {
    await pimPage.fillOutNewEmployeeForm();
  });
});
