import { Locator, Page } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly email: Locator;
    readonly password: Locator;
    readonly submitButton: Locator;
    readonly apiDocumentationLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.email = page.getByTestId('email');
        this.password = page.getByTestId('password');
        this.submitButton = page.getByTestId('submit');
        this.apiDocumentationLink = page.getByRole('link', { name: 'here' });
    }

    async login(email: string, password: string) {
        await this.email.fill(email);
        await this.password.fill(password);
        await this.submitButton.click();
    }

    async redirectToApiDocumentation() {
        await Promise.all([
            this.page.context().waitForEvent('page'),
            this.apiDocumentationLink.click(),
        ]);
    }
}