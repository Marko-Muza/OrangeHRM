# OrangeHRM

This project utilizes Playwright (https://playwright.dev/docs/api-testing) for API and oracledb package (https://node-oracledb.readthedocs.io/en/latest/) for database validations. Playwright is a powerful tool for automating interactions with web browsers and API services. This README.md file provides information on prerequisites, installation, and running the tests.

## Prerequisites

Before running the tests, ensure you have the following prerequisites installed on your system:

- [Node.js](https://nodejs.org/) installed (version 12 or higher recommended)

- [Visual Studio Code](https://code.visualstudio.com/) (or any other code editor of your choice) for code editing
  - (plugin) Playwright Test for VSCode
  - (plugin) Prettier - code formatter

Note: to set up "Prettier" code formatter, in VSCode navigate to: File > Preferences > Settings. In search settings search for "prettier". In search results select Text Editor section and set default formatter to: Prettier - Code fromatter

## Installation

1. Clone this repository to your local machine:

```bash
git clone  https://github.com/Marko-Muza/OrangeHRM.git
```

2. Navigate to the project directory:

```bash
cd <project folder location>
```

3. Install dependencies using npm:

```bash
npm install
```

## Running the Tests

To create the `.env` file, follow these steps:

1.  Navigate to the root of the project directory.
2.  Create a new file named `.env`.
3.  Define the necessary environment variables in the `.env` file.

Here's an example of how your `.env` file might look:

```bash
LOGIN_USER=Admin
LOGIN_PASS=admin123

#### `main`

- Represents the production-ready state of the project.
- Automated tests in this branch are considered stable and ready for execution in the production environment.

#### `dev`

- Main development/refactoring/improvement branch where automated tests are integrated with new changes and executed for integration testing.
- Generally considered unstable and not directly executable in the production environment.

### `feat/` or `test/`

- Feature branches for developing new automated test cases or enhancements.
- Each new automated test case or enhancement should have its own branch prefixed with `feat/` or `test/`.

### `fix/`

- Bug fix branches for addressing issues or defects in automated test cases.
- Each bug fix should have its own branch prefixed with `fix/`.

### `maint/`

- Branches for quick maintenance such as test stability or managing long-term support (LTS) versions of automated tests.

## Branching Workflow

1. **Feature Development:**

   - Create a feature branch from `dev` with the format `feat/feature-name`.
   - Implement the new automated test case or enhancement, periodically merging `dev` into the feature branch for updates.
   - Once complete, create a merge request to merge the feature branch into `dev`.

2. **Bug Fixing:**

   - Create a bug fix branch from `dev` with the format `fix/issue-name`.
   - Implement the fix in the automated test case and create a merge request to merge it back into `dev`.
   - If the fix is critical and affects production, a hotfix branch should be created directly from `main`.

3. **Maintenance:**
   - For long-term support (LTS) versions of automated tests, create maintenance branches from `main`.
   - Apply fixes to these branches and merge them back into `main` and `dev` as necessary.

## Merge Request Guidelines

- Merge requests should be reviewed by at least one other team member, preferably a QA engineer or automation tester.
- Include a descriptive title and detailed description of the changes, including any updates to automated test scripts or configurations.
- Reference relevant issues or test case requirements in pull request descriptions.
- Ensure all automated tests pass and code follows automation testing standards before merging.
```
