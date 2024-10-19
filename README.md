# Express TypeScript Boilerplate

A boilerplate for building RESTful APIs using **Express** and **TypeScript**.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Building for Production](#building-for-production)
- [Deploying to Vercel](#deploying-to-vercel)
- [Scripts](#scripts)

## Features

- **Express**: Fast, unopinionated, minimalist web framework for Node.js
- **TypeScript**: Strongly typed JavaScript
- **Nodemon**: Automatically restarts the server on file changes
- **ESLint**: Linting for code quality
- **Prettier**: Code formatter
- **ts-node**: TypeScript execution environment for Node.js
- **dotenv**: Environment variables handling

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 16.x or later)
- [pnpm](https://pnpm.io/)

### Installation

1. Clone the repository:

   ```bash
   # Clone the repository
   git clone https://github.com/shubhu2002/express-ts-boilerplate.git

   # Goto the cloned project folder.
   cd express-typescript-boilerplate;
   ```

2. Install NPM dependencies:

   ```bash
   pnpm install;
   ```

### Running the project

1. Run the server:

   ```bash
   # Goto to the server folder
   cd server

   # run it
   pnpm dev

   ```

### Building for Production

1. Compile Typescript code:

   ```bash
   pnpm build
   ```

2. Run the production server:

   ```bash
   pnpm start
   ```

### Deploying to Vercel

1. Install the Vercel CLI globally if you haven’t already:

   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:

   ```bash
   vecel login
   ```

3. Deploy:

   ```bash
   vercel
   ```

### Scripts

- `pnpm dev`: Run the project in development mode with hot-reloading.
- `pnpm build`: Build the project for production.
- `pnpm start`: Start the production server.
- `pnpm lint`: Lint the code using ESLint.
- `pnpm format`: Format the code using Prettier.
