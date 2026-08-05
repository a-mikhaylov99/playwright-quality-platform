import { test as base } from '@playwright/test';

import { Page } from "@playwright/test";
import { ContactListPage } from "../pages/contactList.page";
import { AddContactPage } from "../pages/addContact.page";
import { LoginPage } from "../pages/login.page";
import { RegisterPage } from '../pages/register.page';

export interface TestFixtures {
  page: Page;
  contactListPage: ContactListPage;
  addContactPage: AddContactPage;
  loginPage: LoginPage;
  registerPage: RegisterPage;
}

export const test = base.extend<TestFixtures>({
  contactListPage: async ({ page }, use) => {
    await use(new ContactListPage(page));
    },
    addContactPage: async ({ page }, use) => {
        await use(new AddContactPage(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    registerPage: async ({ page }, use) => {
        await use(new RegisterPage(page));
    }
});