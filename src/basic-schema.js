/* eslint-disable object-curly-newline */
const { ID, NAME, DESCRIPTION, PHOTO_URL } = require('./constants');

const basicSchema = table => {
  table.increments(ID).primary();
  table.string(NAME);
  table.string(DESCRIPTION);
  table.string(PHOTO_URL);
};

module.exports = basicSchema;
