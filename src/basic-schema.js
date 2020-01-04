/* eslint-disable object-curly-newline */
const {
  CATEGORIES,
  ID,
  NAME,
  DESCRIPTION,
  PHOTO_URL,
  PERSONS,
} = require('./constants');

const basicSchema = table => {
  table.increments(ID).primary();
  table.string(NAME);
  table.string(DESCRIPTION);
  table.string(PHOTO_URL);
};

module.exports = basicSchema;
