import { test, expect } from '../../../fixtures/base.fixtures';
import { UsersAssertions } from '../../../api-objects/users/users.assertions';

test.describe('Users API Functional Tests', () => {
  const assert = new UsersAssertions();

  test('GET /users returns 200', async ({ usersClient }) => {
    const response = await usersClient.getAllUsers();
    expect (response.status).toBe(200)
    await assert.assertNonEmptyArray(response);
  });

  test('GET /users/:id returns user', async ({ usersClient }) => {
    const response = await usersClient.getUserById(1);
    expect (response.status).toBe(200)
    await assert.assertUserId(response, 1);
    await assert.assertUserHasEmail(response);
  });

  test('GET invalid user returns 404', async ({ usersClient }) => {
    const response = await usersClient.getUserById(9999);
    expect (response.status).toBe(404)
  });

  test('POST /users creates user', async ({ usersClient }) => {
    const response = await usersClient.createUser({ name: 'John', username: 'snow', email: 'john@snow.north' });
    expect (response.status).toBe(201)
  });
});
