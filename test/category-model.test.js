/* eslint-disable no-unused-expressions */
const { describe, it } = require('mocha');
const { expect } = require('chai');

const { Category } = require('../src/models');
const { CATEGORIES } = require('../src/constants');

describe('Category model', () => {
  it(`${CATEGORIES} table name is correct in Category model`, () => {
    expect(Category.tableName).to.be.equals(CATEGORIES);
  });
});
