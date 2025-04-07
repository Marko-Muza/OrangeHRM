import { Page, Locator } from "@playwright/test";

export class PimPage {
  private readonly page: Page;
  private readonly pimAddButton: Locator;
  // Form locators:
  private readonly formLocator: Locator;
  private readonly firstNameLocator: Locator;
  private readonly middleNameLocator: Locator;
  private readonly lastNameLocator: Locator;
  private readonly employeeIdLocator: Locator;
  private readonly createLoginDetailsLocator: Locator;
  private readonly userNameLocator: Locator;
  private readonly statusDisabled: Locator;
  private readonly passwordInput: Locator;
  private readonly confirmPasswordInput: Locator;
  private readonly cancelAddEmployee: Locator;
  private readonly firstName: string;
  private readonly middleName: string;
  private readonly lastName: string;
  private readonly employeeId: string;
  private readonly userName: string;
  private readonly validPassword: string;

  constructor(
    page: Page,
    firstName: string,
    middleName: string,
    lastName: string,
    employeeId: string,
    userName: string,
    validPassword: string
  ) {
    this.page = page;
    this.formLocator = page.locator(".orangehrm-header-container");
    this.pimAddButton = this.formLocator.locator(".oxd-icon.bi-plus.oxd-button-icon");
    this.firstNameLocator = page.getByRole("textbox", { name: "First Name" });
    this.middleNameLocator = page.getByRole("textbox", { name: "Middle Name" });
    this.lastNameLocator = page.getByRole("textbox", { name: "Last Name" });
    this.employeeIdLocator = page.locator(".oxd-input.oxd-input--active").last();
    this.createLoginDetailsLocator = page.locator(".oxd-switch-input.oxd-switch-input--active");
    this.userNameLocator = page.locator(".oxd-input.oxd-input--active").nth(5);
    this.statusDisabled = page.locator(".oxd-radio-input").last();
    this.passwordInput = page.locator(".oxd-input--active").nth(6);
    this.confirmPasswordInput = page.locator(".oxd-input--active").last();
    this.cancelAddEmployee = page.getByRole("button", { name: " Cancel " });
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.employeeId = employeeId;
    this.userName = userName;
    this.validPassword = validPassword;
  }
  async clickAddEmployee() {
    await this.pimAddButton.click();
  }
  async fillOutNewEmployeeForm(
    firstname: string = this.firstName,
    middlename: string = this.middleName,
    lastname: string = this.lastName,
    employeeid: string = this.employeeId,
    username: string = this.userName,
    password: string = this.validPassword
  ): Promise<void> {
    await this.page.goto("/web/index.php/pim/addEmployee");
    await this.firstNameLocator.fill(firstname);
    await this.middleNameLocator.fill(middlename);
    await this.lastNameLocator.fill(lastname);
    await this.employeeIdLocator.fill(employeeid);
    await this.createLoginDetailsLocator.setChecked(true);
    await this.userNameLocator.fill(username);
    await this.statusDisabled.click();
    await this.passwordInput.fill(password);
    await this.confirmPasswordInput.fill(password);
    const input = await this.page.locator('input[type="file"]').elementHandle();
    await input?.setInputFiles("C:/Users/ZIRA Temp/Otis.jpg");
    await this.cancelAddEmployee.click();
  }
}
