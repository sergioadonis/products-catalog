/* eslint-disable no-console */
/* eslint-disable object-curly-newline */
const {
  CATEGORIES,
  ID,
  NAME,
  DESCRIPTION,
  PHOTO_URL,
  PERSONS,
} = require('./contants');

const basicSchema = table => {
  table.increments(ID).primary();
  table.string(NAME);
  table.string(DESCRIPTION);
  table.string(PHOTO_URL);
};

// Create database schema. You should use knex migration files
// to do this. We create it here for simplicity.
const createSchema = async knex => {
  // Categories model schema
  if (!(await knex.schema.hasTable(CATEGORIES))) {
    console.log(`Creating ${CATEGORIES} schema... `);
    await knex.schema.createTable(CATEGORIES, table => {
      basicSchema(table);
    });
  }
  // Persons model schema
  if (!(await knex.schema.hasTable(PERSONS))) {
    console.log(`Creating ${PERSONS} schema... `);
    await knex.schema.createTable(PERSONS, table => {
      basicSchema(table);
      table
        .integer('parentId')
        .unsigned()
        .references('persons.id');
      table.string('firstName');
    });
  }
};

module.exports = createSchema;
