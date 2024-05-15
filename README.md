# Implementation of a Simple WYSIWYG Editor with Vue.js + PWA, E2E/Unit tests

This project implements a simple WYSIWYG (What You See Is What You Get) editor using Vue.js. It also includes Progressive Web App (PWA) features and E2E/Unit tests.

## Installation

To install dependencies, use `yarn`:

```bash
yarn
```

### Usage

To run the project locally, use the following command:

```bash 
yarn run serve
```

### Production build

```bash 
yarn run build
```

### Linting

```bash 
yarn run lint
```
This command runs the linter to identify potential style and formatting issues in your code.

## Testing

### Unit tests

This executes the unit tests using Jest.
```bash 
yarn run test:unit
```

### E2E tests

This runs the end-to-end tests using Cypress.
```bash 
yarn run test:e2e
```

## Packages Used

* cypress: E2E testing framework (https://www.cypress.io/)
* vue3-jest, babel-jest, plugin-unit-jest: Testing utilities for Vue.js components with Jest (https://www.npmjs.com/package/@vue/vue3-jest)
* cli-plugin-pwa: Plugin for generating PWA configurations (https://www.npmjs.com/package/@vue/cli-plugin-pwa)
* cli-plugin-e2e-cypress: Plugin for integrating Cypress into Vue CLI projects (https://cli.vuejs.org/guide/)
* cypress-file-upload: Utility for file uploads in Cypress tests (https://www.npmjs.com/package/cypress-file-upload)



