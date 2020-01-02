/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
require('dotenv').config();
const { before, after } = require('mocha');
const { describe, it } = require('mocha');
const { expect } = require('chai');
const createSchema = require('../src/createSchema');
const knex = require('../src/config/knex');

const {
  CATEGORIES,
  ID,
  NAME,
  DESCRIPTION,
  PHOTO_URL,
  // PERSONS,
} = require('../src/contants');

before(async () => {
  console.log('Creating schema before testing... ');
  await createSchema(knex);
  console.log('Creating schema before testing... OK');
});

describe('Schema', () => {
  describe('categories table schema', () => {
    it('categories', async () => {
      const exists = await knex.schema.hasTable(CATEGORIES);
      expect(exists).to.be.true;
    });
    it('categories.id', async () => {
      const hasColumn = await knex.schema.hasColumn(CATEGORIES, ID);
      return expect(hasColumn).to.be.true;
    });
    it('categories.name', async () => {
      const hasColumn = await knex.schema.hasColumn(CATEGORIES, NAME);
      return expect(hasColumn).to.be.true;
    });
    it('categories.description', async () => {
      const hasColumn = await knex.schema.hasColumn(CATEGORIES, DESCRIPTION);
      return expect(hasColumn).to.be.true;
    });
    it('categories.photoUrl', async () => {
      const hasColumn = await knex.schema.hasColumn(CATEGORIES, PHOTO_URL);
      return expect(hasColumn).to.be.true;
    });
  });
});

after(async () => {
  console.log('Close connection...');
  await knex.destroy();
  console.log('Close connection... OK');
});
