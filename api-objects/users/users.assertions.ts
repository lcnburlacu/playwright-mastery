// api-objects/users/v1/users.assertions.ts
import { BaseAPIAssertions } from '../base.api.assertions';
import { APIResponse, expect } from '@playwright/test';

export class UsersAssertions extends BaseAPIAssertions {  
  async assertUserId(response: APIResponse, id: number) {
    const body = await response.json();
    expect(body.id, `Expected id ${id}`).toBe(id);
  }

  async assertUserHasEmail(response: APIResponse) {
    const body = await response.json();
    expect(body.email).toBeDefined();
    expect(body.email.includes('@')).toBeTruthy();
  }
}