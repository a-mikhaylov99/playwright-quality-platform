import { Locator, Page } from "@playwright/test";

export class ContactListPage {
    readonly page: Page;
    readonly addNewContactButton: Locator;
    readonly contactList: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.contactList = page.getByTestId('myTable');
        this.addNewContactButton = page.getByTestId('add-contact');
    }
}