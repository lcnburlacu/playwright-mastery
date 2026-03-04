import { expect, APIResponse } from '@playwright/test';

/*
  Base assertions for all API clients.
  Other assertion classes can extend this.
 */
export class BaseAPIAssertions {

// Assert that response body is a non-empty array
  async assertNonEmptyArray(response: APIResponse) {
    const body = await response.json();
    expect(Array.isArray(body), 'Response is not an array').toBeTruthy();
    expect(body.length, 'Array is empty').toBeGreaterThan(0);
  }
}
