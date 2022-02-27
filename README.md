# Haru-Fashion API

RESTful API for Haru-Fashion e-commerce web application. Developed with NodeJS, Express, TypeScript, Prisma and PostgreSQL.

## Badges

![ts](https://badgen.net/badge/Built%20With/TypeScript/blue)
[![CircleCI](https://circleci.com/gh/satnaing/haru-api/tree/master.svg?style=shield)](https://circleci.com/gh/satnaing/haru-api/tree/master)
[![Heroku](https://pyheroku-badge.herokuapp.com/?app=angularjs-crypto&style=flat)](https://haru-fashion.herokuapp.com/)
[![Jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

## Demo

[🚀 API Demo](https://haru-fashion.herokuapp.com/api/v1/categories)  
[📖 API Docs](https://satnaing.github.io/haru-api/)

## Features

Here are some of the project's features

- CRUD Operations
- Authentication
- Authorization and RBAC
- Forgot/Reset Password
- Full-Text Search (for products)

## Tech Stack

**Backend:** Node, Express, TypeScript  
**Database:** Prisma + PostgreSQL  
**Testing:** Jest  
**Containerization:** Docker  
**CI/CD:** CircleCI

## Running Locally

Clone the project

```bash
git clone https://github.com/satnaing/haru-api.git
```

Go to the project directory

```bash
cd haru-api
```

Remove remote origin

```bash
git remote remove origin
```

Install dependencies

```bash
npm install
```

Add Environment Variables  
_add the following environment variables to .env file. (some env var include example values)_

<details>
  <summary>Click to expand!</summary>
  
  - `NODE_ENV`  
  - `PORT`  
  - `POSTGRES_USER=testuser`
  - `POSTGRES_PASSWORD=test123`
  - `POSTGRES_DB=haru`
  - `JWT_SECRET`
  - `SMTP_HOST`
  - `SMTP_PORT`
  - `SMTP_USER`
  - `SMTP_PASS`
  - `FROM_NAME`
  - `FROM_MAIL`
  - `DATABASE_URL="postgresql://testuser:test123@postgres:5432/haru?schema=public"`
</details>

Migrate and seed database

```bash
npx prisma migrate dev --name init
```

```bash
npx prisma db seed
```

<details>
  <summary>Can't reach database server Error ?</summary>

- _Change_ **@postgres** _to_ **@localhost** _in_ `DATABASE_URL` _inside .env **for a while**_

```bash
DATABASE_URL="postgresql://testuser:test123@postgres:5432/test_db?schema=public"
```

<p align="center">⬇️</p>

```bash
DATABASE_URL="postgresql://testuser:test123@localhost:5432/test_db?schema=public"
```

</details>

Start the server

```bash
npm run dev
```

Stop the server

```bash
npm run dev:down
```

## Running Tests

To run tests, create a file called **.env.test** at the root of the project.
Then add the following environment variables.  
`NODE_ENV=testing`  
`DATABASE_URL="postgresql://prisma:prisma@localhost:5437/tests"`

Note! dotenv-cli must be installed golbally before running any test

```bash
sudo npm install -g dotenv-cli
```

Run the test

```bash
npm run test
```

<details>
  <summary>Can't reach database server Error ?</summary>

- Run the test again

</details>

Stop the test

```bash
npm run test:down
```
