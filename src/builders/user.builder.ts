import { faker } from "@faker-js/faker";
import { User } from "../api/models/user";
import { BaseBuilder } from "./base.builder";

export class UserBuilder extends BaseBuilder<User> {
    private user: User;

    constructor() {
        super();
        this.user = UserBuilder.createDefaultUser();
    }

    public withFirstName(firstName: string): this {
        this.user.firstName = firstName;
        return this;
    }

    public withLastName(lastName: string): this {
        this.user.lastName = lastName;
        return this;
    }

    public withEmail(email: string): this {
        this.user.email = email;
        return this;
    }

    public withPassword(password: string): this {
        this.user.password = password;
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