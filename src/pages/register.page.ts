import { Locator, Page } from "@playwright/test";
import { User } from "../api/models";

export class RegisterPage {
    readonly page: Page;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly email: Locator;
    readonly password: Locator;
    readonly submitButton: Locator;
    readonly addNewContactButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstName = page.getByTestId('firstName');
        this.lastName = page.getByTestId('lastName');
        this.email = page.getByTestId('email');
        this.password = page.getByTestId('password');
        this.submitButton = page.getByTestId('submit');
        this.addNewContactButton = page.getByTestId('add-contact');
    }

    async registerUser(user: User) {
        await this.firstName.fill(user.firstName);
        await this.lastName.fill(user.lastName);
        await this.email.fill(user.email);
        await this.password.fill(user.password);
        await this.submitButton.click();
        await this.addNewContactButton.waitFor({ state: 'visible' });
    }
}