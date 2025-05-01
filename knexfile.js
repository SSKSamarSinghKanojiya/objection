require('dotenv').config();

module.exports = {
  development: {
    client: process.env.DB_CLIENT,
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }
};

// this file name knexfile.js
/*
✅ Purpose:
This file tells Knex how to connect to your database. It uses environment variables for security and flexibility, and also tells Knex where to find migrations (for sc
hema changes) and seeds (for initial data).
*/