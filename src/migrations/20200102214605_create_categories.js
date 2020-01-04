const basicSchema = require('../basic-schema');
const { CATEGORIES } = require('../constants.js');

exports.up = function(knex) {
  return knex.schema.createTable(CATEGORIES, table => {
    basicSchema(table); // Add id (autoincrement, int), name, description and photo_url string columns
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable(CATEGORIES);
};
