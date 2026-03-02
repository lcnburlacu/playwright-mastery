# Playwright Mastery

A web UI and API automation testing project built with Playwright and TypeScript, using the Page Object Model pattern for clean and maintainable tests.

## Overview

- This project contains automated tests for web applications, covering login functionality, element manipulation, table operations, etc. It demonstrates best practices for end-to-end testing with organized test structure and reusable components.

## Project Structure

- **page-objects/** - Page objects organized by feature (login, table, add-remove elements)
- **tests/** - Test specifications for each feature
- **fixtures/** - Shared test setup and configuration
- **playwright-report/** - Generated HTML test reports

## Key Features

- **Page Object Model** - Clean separation between test logic,  page interactions, test data and complex assertions
- **TypeScript** - Type-safe testing code, also recommended by MS
- **Cross-browser Testing** - Tests run on Chromium, WebKit, Mobile config
- **HTML Reports** - Detailed test results with screenshots and traces
- **Parallel Execution** - Tests run efficiently in parallel

## Future / Not Implemented yet
- API testing: contract validation, functional positive/negative, data driven scenarios, load testing
- Visual regression: component level screenshot comparison
- User Journeys: Complex scenarios mimicing the user behaviour spanning multiple features under a single test. Only assert key transition events. 

## Getting Started

### Prerequisites
- Node.js 24 or higher
- npm

### Installation

1. Install dependencies:
   - npm install
   - npm install dotenv --save-dev
   - npm init -y
   - npm init playwright@latest
   - npm install --save-dev prettier
   - npx prettier --write "**/*.ts"


2. Set up environment variables:
   Create a `.env` file in the root directory and define required variables

## Running Tests

- Run all tests: `npx playwright test`
- Run specific test file: `npx playwright test tests/login.spec.ts`
- Run in UI mode: `npx playwright test --ui`
- View test report: `npx playwright show-report`

## Test Coverage

The project includes tests for:

- **Login** - User authentication flows (valid/invalid login, logout)
- **Add/Remove Elements** - Dynamic element handling
- **Table Operations** - Table interactions and validation

## Configuration

The project uses `playwright.config.ts` for test configuration including:
- Test directory location
- Browser selection (Chromium, WebKit)
- HTML reporting
- Retry and timeout settings
- Trace collection for debugging

## Technology Stack

- **@playwright/test** - E2E testing framework
- **TypeScript** - Language for type safety, better error catching and advanced edditor support
- **dotenv** - Environment variable management
- **GitHub** - Version Control
- **GitHub Actions** - automated test triggers
- **GitHub Secrets** - Sensitive ENV Variables
- **prettier** - Makes the code pretty (pretty good looking) 🙂
- **VS Code** - Editor

## Learn More

Visit [Playwright Documentation](https://playwright.dev) for detailed information about writing and running tests.
