import { APIRequestContext } from '@playwright/test';

// base class for all API clients
export class BaseAPI {
  protected request: APIRequestContext;  // Playwright object to make HTTP calls
  protected baseURL: string;            // Base URL for the API

  constructor(request: APIRequestContext, baseURL?: string) {
    this.request = request;
    // If a URL is passed, use it; otherwise use the default
    this.baseURL = baseURL || 'https://jsonplaceholder.typicode.com';
  }

// Helper to build full endpoint URLs, e.g. 'https://jsonplaceholder.typicode.com/users'
  protected getBaseUrl(path: string) {
    return `${this.baseURL}${path}`;
  }
}