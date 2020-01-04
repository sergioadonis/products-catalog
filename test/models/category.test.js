/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
const { before, after } = require('mocha');
const { describe, it } = require('mocha');
const { expect } = require('chai');

const knex = require('../../src/connection');
const { Category } = require('../../src/models');
Category.knex(knex);

let categoryId = null;

describe('Category model CRUD', () => {
  it('list categories', async () => {
    const categoryList = await Category.query();
    expect(categoryList).to.be.a('array');
    const length = categoryList.length;
    // console.log(`Category list lenght: ${length}`);
  });
  it('create a category', async () => {
    const categoryObj = await Category.query().insert({
      name: 'Category test',
      description: 'This is the description',
    });

    // console.log(`Category created id: ${categoryObj.id}`);

    expect(categoryObj).to.be.a('object');
    expect(categoryObj.id).to.be.a('number');

    categoryId = categoryObj.id;
  });
  it('get a category', async () => {
    const category = await Category.query().findById(categoryId);
    // console.log(`Category object: ${JSON.stringify(category)}`);
    return expect(category).to.be.a('object');
  });
  it('update a category', async () => {
    const numUpdated = await Category.query().patch({
      photoUrl: 'http://photo.category.content/random-url-for-testing',
      description: 'The photo URL has been updated.'
    })
    .where('id', categoryId);
    // console.log(`Category num updated: ${numUpdated}`);
    return expect(numUpdated).to.be.a('number');
  });
  it('delete a category', async () => {
    const numDeleted = await Category.query().delete()
    .where('id', categoryId);
    // console.log(`Category num deleted: ${numDeleted}`);
    return expect(numDeleted).to.be.a('number');
  });
});
