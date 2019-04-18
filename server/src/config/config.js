module.exports = {

  // If using onine database
  // "development": {
  //   "use_env_variable": "DATABASE_URL"
  // },

  development: {
    username: 'steven',
    password: null,
    database: 'books',
    host: '127.0.0.1',
    port: 5432,
    secret_key: process.env.SECRET_KEY,
    dialect: 'postgres'
  },

  test: {
    username: 'postgres',
    password: 'password',
    database: 'book_test',
    host: '127.0.0.1',
    port: 5432,
    secret_key: process.env.SECRET_KEY,
    dialect: 'postgres'
  },

  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    port: 5432,
    secret_key: process.env.SECRET_KEY,
    dialect: 'postgres'
  }
};
