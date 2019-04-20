require('dotenv').config(); // magic

// module.exports = {
// If using onine database
// "development": {
//   "use_env_variable": "DATABASE_URL"
// },

module.exports = {
  development: {
    // database: process.env.DB_NAME,
    // username: process.env.DB_USER,
    // password: process.env.DB_PASS,
    // host: process.env.DB_HOST,
    // dialect: 'postgres'
    database: 'books',
    username: 'steven',
    password: null,
    host: '127.0.0.1',
    dialect: 'postgres'
  },

  test: {
    // database: process.env.DB_NAME,
    // username: process.env.DB_USER,
    // password: process.env.DB_PASS,
    // host: process.env.DB_HOST,
    // dialect: 'postgres'
    database: 'book_test',
    username: 'steven',
    password: null,
    host: '127.0.0.1',
    dialect: 'postgres'
  },

  production: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
};
