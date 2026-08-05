import { Locator, Page } from "@playwright/test";
import { Contact } from "../api/models";

export class AddContactPage {
    readonly page: Page;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly email: Locator;
    readonly birthDate: Locator;
    readonly street1: Locator;
    readonly street2: Locator;
    readonly city: Locator;
    readonly stateProvince: Locator;
    readonly postalCode: Locator;
    readonly country: Locator;
    readonly submitButton: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.firstName = page.getByTestId('firstName');
        this.lastName = page.getByTestId('lastName');
        this.email = page.getByTestId('email');
        this.birthDate = page.getByTestId('birthDate');
        this.street1 = page.getByTestId('street1');
        this.street2 = page.getByTestId('street2');
        this.city = page.getByTestId('city');
        this.stateProvince = page.getByTestId('stateProvince');
        this.postalCode = page.getByTestId('postalCode');
        this.country = page.getByTestId('country');
        this.submitButton = page.getByTestId('submit');
    }

    async fillContactForm(contact: Contact) {
        await this.firstName.fill(contact.firstName);
        await this.lastName.fill(contact.lastName);
        await this.birthDate.fill(contact.birthdate!);
        await this.street1.fill(contact.street1!);
        await this.street2.fill(contact.street2!);
        await this.city.fill(contact.city!);
        await this.stateProvince.fill(contact.stateProvince!);
        await this.postalCode.fill(contact.postalCode!);
        await this.country.fill(contact.country!);
    }

    async addContact(contact: Contact) {
        await this.fillContactForm(contact);
        await this.submitButton.click();
    }
}