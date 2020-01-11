/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
const { before, after } = require('mocha');
const { describe, it } = require('mocha');
const { expect } = require('chai');

const {
  CATEGORIES,
  ID,
  NAME,
  DESCRIPTION,
  PHOTO_URL,
  // PERSONS,
} = require('../src/constants');
const knex = require('../src/connection');

before(() => {
  console.log('Starting schema test...');
});

describe('Schema', () => {
  describe('categories table schema', () => {
    it('categories table exists', async () => {
      const exists = await knex.schema.hasTable(CATEGORIES);
      expect(exists).to.be.true;
    });
    it('id column exists in categories table', async () => {
      const hasColumn = await knex.schema.hasColumn(CATEGORIES, ID);
      expect(hasColumn).to.be.true;
    });
    it('name column exists in categories table', async () => {
      const hasColumn = await knex.schema.hasColumn(CATEGORIES, NAME);
      expect(hasColumn).to.be.true;
    });
    it('description column exists in categories table', async () => {
      const hasColumn = await knex.schema.hasColumn(CATEGORIES, DESCRIPTION);
      expect(hasColumn).to.be.true;
    });
    it('photoUrl column exists in categories table', async () => {
      const hasColumn = await knex.schema.hasColumn(CATEGORIES, PHOTO_URL);
      expect(hasColumn).to.be.true;
    });
  });
});

after(async () => {
  console.log('Close connection...');
  await knex.destroy();
  console.log('Close connection... OK');
});
