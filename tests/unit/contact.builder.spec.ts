import test, { expect } from "@playwright/test";
import { ContactBuilder } from "../../src/builders";

test.describe('Contact Builder', () => {
    test('should create a contact with valid data', async () => {
        const contactBuilder = new ContactBuilder().build();

        expect(contactBuilder.firstName).not.toBe('');
        expect(contactBuilder.lastName).not.toBe('');
        expect(contactBuilder.email).toContain('@');
        expect(contactBuilder.phone).not.toBe('');
    })

    test('overrides selected fields', () => {
        const contact = new ContactBuilder()
            .withFirstName('John')
            .withLastName('Doe')
            .withEmail('john@example.com')
            .withPhone('+1234567890')
            .build();

        expect(contact.firstName).toBe('John');
        expect(contact.lastName).toBe('Doe');
        expect(contact.email).toBe('john@example.com');
        expect(contact.phone).toBe('+1234567890');
    });

    test('creates unique emails', () => {
        const firstContact = new ContactBuilder().build();
        const secondContact = new ContactBuilder().build();

        expect(firstContact.email).not.toBe(secondContact.email);
    });

    test('does not mutate previously built object', () => {
        const builder = new ContactBuilder();
        const firstContact = builder.build();
        builder.withFirstName('Changed');  
    
        const secondContact = builder.build();
        expect(firstContact.firstName).not.toBe('Changed');
        expect(secondContact.firstName).toBe('Changed');
    })
})