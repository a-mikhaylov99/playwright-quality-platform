import test, { expect } from "@playwright/test";
import { UserBuilder } from "../../src/builders";

test.describe('User Builder', () => {
    test('should create a user with valid data', async () => {
        const userBuilder = new UserBuilder().build();

        expect(userBuilder.firstName).not.toBe('');
        expect(userBuilder.lastName).not.toBe('');
        expect(userBuilder.email).toContain('@');
        expect(userBuilder.password).not.toBe('');
    })

    test('overrides selected fields', () => {
        const user = new UserBuilder()
            .withFirstName('Alexander')
            .withEmail('alexander@example.com')
            .build();

        expect(user.firstName).toBe('Alexander');
        expect(user.email).toBe('alexander@example.com');
    });


    test('creates unique emails', () => {
        const firstUser = new UserBuilder().build();
        const secondUser = new UserBuilder().build();

        expect(firstUser.email).not.toBe(secondUser.email);
    });



    test('does not mutate previously built object', () => {
        const builder = new UserBuilder();
        const firstUser = builder.build();
        builder.withFirstName('Changed');

        const secondUser = builder.build();

        expect(firstUser.firstName).not.toBe('Changed');
        expect(secondUser.firstName).toBe('Changed');
    });
})