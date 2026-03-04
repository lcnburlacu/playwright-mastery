// api-objects/users/users.client.ts
import { APIRequestContext } from '@playwright/test';
import { BaseAPI } from '../base.api';
import { UsersAssertions } from './users.assertions';
import { User } from './user.model';

export class UsersClient extends BaseAPI {
  readonly assert: UsersAssertions;

  constructor(request: APIRequestContext, baseURL?: string) {
    super(request, baseURL);  // pass both to BaseAPI
    this.assert = new UsersAssertions();
  }

  // GET /users
  async getAllUsers() {
    return this.request.get(this.getBaseUrl('/users'));
  }

  // GET  /users/$id
  async getUserById(id: number) {
    return this.request.get(this.getBaseUrl(`/users/${id}`));
  }

  // POST /users
  async createUser(user: Partial<User>) {
    return this.request.post(this.getBaseUrl('/users'), { data: user });
  }

  // PUT /users/$id
  async updateUser(id: number, user: Partial<User>) {
    return this.request.put(this.getBaseUrl(`/users/${id}`), { data: user });
  }

  // DELETE /users/$id
  async deleteUser(id: number) {
    return this.request.delete(this.getBaseUrl(`/users/${id}`));
  }
}