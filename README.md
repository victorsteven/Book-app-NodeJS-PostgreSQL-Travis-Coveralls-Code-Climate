
Book Application

[![Build Status](https://travis-ci.org/victorsteven/Book-app-NodeJS-PostgreSQL-Travis-Coveralls-Code-Climate.svg?branch=master)](https://travis-ci.org/victorsteven/Book-app-NodeJS-PostgreSQL-Travis-Coveralls-Code-Climate)    [![Coverage Status](https://coveralls.io/repos/github/victorsteven/Book-app-NodeJS-PostgreSQL-Travis-Coveralls-Code-Climate/badge.svg?branch=master)](https://coveralls.io/github/victorsteven/Book-app-NodeJS-PostgreSQL-Travis-Coveralls-Code-Climate?branch=master)    [![Maintainability](https://api.codeclimate.com/v1/badges/750e4ce5c8a8112eec3a/maintainability)](https://codeclimate.com/github/victorsteven/Book-app-NodeJS-PostgreSQL-Travis-Coveralls-Code-Climate/maintainability) 

> A Simple Book RestAPI

## Getting Started

> [[Technologies](#technologies-used) &middot; [Testing Tools](#testing-tools) &middot; [Installations](#installations) &middot; [API Endpoints](#api-endpoints) &middot; [Tests](#tests) &middot; [Author](#author)


## Technologies Used

[node]: (https://nodejs.org)

- [Node.js](node)
- [postgreSQL](node)
- [Express.js](https://expressjs.com).
- [ESLint](https://eslint.org/).
- [Airbnb](https://www.npmjs.com/package/eslint-config-airbnb).

## Testing Tools

- [Mocha](https://mochajs.org/).
- [Chai](https://chaijs.com).

## Installations

#### Getting started

- You need to have Node and NPM installed on your computer.
- Installing [Node](node) automatically comes with npm.

#### Clone

- Clone this project to your local machine `git@github.com:victorsteven/Book-app-NodeJS-PostgreSQL-Travis-Coveralls-Code-Climate.git`

#### Setup

- Installing the project dependencies
  > Run the command below
  ```shell
  $ npm install
  ```
- Start your node server
  > run the command below
  ```shell
  $ npm run dev
  ```
- Use `http://localhost:8000` as base url for endpoints

## API Endpoints

| METHOD | DESCRIPTION                             | ENDPOINTS                 |
| ------ | --------------------------------------- | ------------------------- |
| POST   | Add a book                              | `/api/v1/books`           |
| GET    | Get all the book                        | `/api/v1/books`           |
| PUT    | Update the details of a book            | `/api/v1/books/:bookId`   |
| GET    | Get a book particular book              | `/api/v1/books/:bookId`   |
| DELETE | Remove a book                           | `/api/v1/books/:bookId`   |


## Tests

- Run test for all endpoints
  > run the command below
  ```shell
  $ npm run test
  ```


## Author

- Steven Victor
   medium: medium.com/@victorsteven  
   twitter: twitter.com/stevensunflash  
   linkedin: linkedin.com/in/stevenchikodi