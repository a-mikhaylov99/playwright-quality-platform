import { faker } from "@faker-js/faker";
import { User } from "../api/models/user";
import { BaseBuilder } from "./base.builder";

export class UserBuilder extends BaseBuilder<User> {
    constructor() {
        super();
        this.data = UserBuilder.createDefaultUser();
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

    public withPassword(password: string): this {
        this.data.password = password;
        return this;
    }

    private static createDefaultUser(): User {
        return {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email({
                provider: 'example.com',
            }),
            password: `Qa-${faker.string.alphanumeric(12)}!`,
        };
    }

}