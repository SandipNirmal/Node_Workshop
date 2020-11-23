# Node.js App

Basic Node.js REST Application using ExpressJS. Things to cover:

1. REST App with Node.js
2. Routing
3. Middlewares
4. DB Connection - Postgres
5. JWT - Auth

## APIs

REST APIs part of this Repo

### User

CRUD APIs for user entity

### Tweet

Logged in User can post and manage tweets.

### Tweet Stats

Tweet likes

## Install Dependancies

You can install dependancies using `npm` or `yarn`.

```sh
npm install

or

yarn
```

## Setting Environment variables

You can use `.env.example` as a reference file for creating file named `.env` and replace values with actual values you want to use in your environment.

## Setting Up DB

You can run scripts available in codebase to create DBs.

### Dev DB

```sh
sh create_db.sh
```

### Test DB

```sh
sh create_test_db.sh
```

### Run migrations

Run all the sql files available in `migrations` directory sequentially. For any ulterations add another file with incremented number in file name.

## Starting server

You can start server in dev mode using following script.

### Development

```sh
yarn start

or

npm run start
```

### Production

```sh
yarn serve

or

npm run serve
```

## Testing application

For testing application uses Jest and Supertest. You can run all the tests using following command.

```sh
yarn test

or

npm run test
```
