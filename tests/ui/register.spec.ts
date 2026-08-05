import { UserBuilder } from "../../src/builders/user.builder";
import { test } from "../../src/fixtures/fixtures";

test.describe('Register page', () => {
    test('should register a new user', async ({ page, registerPage }) => {
        await page.goto('/addUser');
        await registerPage.registerUser(new UserBuilder().build());
    });
});
