# Contract API Example

## Motivation
This project showcases the use of a contract API to allow parallel backend and frontend development. By defining the API contract using OpenAPI and serving it through Swagger, both backend and frontend teams can work independently, ensuring smoother integration and consistent communication.

## Stack and Tools
- **Vite**: Fast and minimalistic build tool.
- **React**: JavaScript library for building user interfaces.
- **Apollo Client**: Comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL.
- **MSW (Mock Service Worker)**: API mocking library for seamless development.
- **TypeScript**: Strongly typed programming language that builds on JavaScript.
- **OpenAPI**: Standard for defining RESTful APIs.
- **Swagger**: Tool for documenting and consuming OpenAPI-defined APIs.

## Project Setup

### Prerequisites
- Node.js installed on your machine.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/amalv/contract-api.git
   cd contract api
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Run the development server:
   ```bash
   bun run dev
   ```

This project sets up a simple Star Wars API using OpenAPI and showcases how to query it using Apollo Client in a React application. The API is mocked using MSW to facilitate parallel development.

### Example API
The Star Wars API includes endpoints for retrieving lists of characters and their details. This project serves as an example of how to implement and use contract APIs effectively.
