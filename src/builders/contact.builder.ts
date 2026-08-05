import { faker } from "@faker-js/faker";
import { Contact } from "../api/models";
import { BaseBuilder } from "./base.builder";

export class ContactBuilder extends BaseBuilder<Contact> {
    constructor() {
        super();
        this.data = ContactBuilder.createDefaultContact();
    }

    public withFirstName(firstName: string): this {
        this.data.firstName = firstName;
        return this;
    }

    public withLastName(lastName: string): this {
        this.data.lastName = lastName;
        return this;
    }

    public withEmail(email: string): this {
        this.data.email = email;
        return this;
    }

    public withPhone(phone: string): this {
        this.data.phone = phone;
        return this;
    }

    private static createDefaultContact(): Contact {
        return {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            birthdate: faker.date
                .birthdate({ min: 18, max: 70, mode: 'age' })
                .toISOString()
                .slice(0, 10),
            email: faker.internet.email({ provider: 'example.com' }),
            phone: faker.phone.number(),
            street1: faker.location.streetAddress(),
            street2: faker.location.secondaryAddress(),
            city: faker.location.city(),
            stateProvince: faker.location.state(),
            postalCode: faker.location.zipCode(),
            country: faker.location.country(),
        };
    }
}
