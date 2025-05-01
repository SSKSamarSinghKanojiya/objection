const knex = require('knex');
const knexConfig = require('../knexfile');
const { Model } = require('objection');

const db = knex(knexConfig.development);
Model.knex(db);

module.exports = db;


// this file name knex.js

/*
✅ Purpose:
This initializes Knex and binds it to Objection.js so that all models can use the database connection.
*/