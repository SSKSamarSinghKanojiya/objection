exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
    table.string('role').defaultTo('user');
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users');
};



 /*
 ✅ Purpose:
This file defines the structure of the users table using Knex’s schema builder.

The up function is for creating the table.

The down function is for undoing the migration.
  */