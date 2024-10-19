# Contract API Example

## Motivation
This project showcases the use of a contract API to allow parallel backend and frontend development. By defining the API contract using OpenAPI and serving it through Swagger, both backend and frontend teams can work independently, ensuring smoother integration and consistent communication.

## Stack and Tools
- ⚡️ **Vite**: Fast and minimalistic build tool.
- ⚛️ **React**: JavaScript library for building user interfaces.
- 🚀 **Apollo Client**: Comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL.
- 🛠️ **MSW (Mock Service Worker)**: API mocking library for seamless development.
- 📝 **TypeScript**: Strongly typed programming language that builds on JavaScript.
- 📜 **OpenAPI**: Standard for defining RESTful APIs.
- 📚 **Swagger**: Tool for documenting and consuming OpenAPI-defined APIs.
- 🔄 **release-please**: Automated release tool for managing versioning and changelog generation.

## Project Setup

### Prerequisites
- Node.js installed.
- bun installed.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/amalv/contract-api.git
   cd contract-api
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Run the Swagger documentation server:
   ```bash
   bun run swagger 
   ```

4. Open your browser and navigate to `http://localhost:3000/api-docs` to view the Swagger UI.

5. Run the development server:
   ```sh
   bun run dev
   ```

6. See console output overriding API call:

```sh
[ 'Luke Skywalker', 'Darth Vader', 'Leia Organa' ]
{ id: '1', name: 'Luke Skywalker', description: 'A Jedi Knight' }
```

## Swagger UI
Swagger UI provides a visual interface to interact with the API defined in the `openapi.yaml` file. It allows you to test endpoints and view request/response schemas.

## MSW Setup

### Handlers

Mock Service Worker (MSW) is used to mock API requests during development. The mock server is set up in src/mocks/node.ts and the browser worker is set up in src/mocks/browser.ts.

### Node.js Setup
In a Node.js environment, the mock server is configured and started in src/index.ts:

## Release Process

The release process is automated using `release-please`. This tool manages versioning and changelog generation based on conventional commits. When changes are pushed to the `main` branch, `release-please` will create a release PR if it detects any conventional commits. Once the release PR is merged, a new release will be published automatically.
