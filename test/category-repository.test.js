/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
const { describe, it } = require('mocha');
const { expect } = require('chai');

const knex = require('../src/connection');
const { CategoryRepository } = require('../src/repositories');

const repository = new CategoryRepository(knex);
let categoryId = null;

describe('Category model repository', () => {
  it('list categories', async () => {
    const categoryList = await repository.findAll();
    expect(categoryList).to.be.a('array');
    // const { length } = categoryList;
    // console.log(`Category list lenght: ${length}`);
  });
  it('create a category', async () => {
    const category = await repository.create({
      name: 'Category test',
      description: 'This is the description',
    });

    // console.log(`Category created id: ${categoryObj.id}`);

    expect(category).to.be.a('object');
    expect(category.id).to.be.a('number');
    // console.log(`Category object: ${JSON.stringify(category)}`);
    categoryId = category.id;
  });
  it('get a category by id', async () => {
    const category = await repository.findById(categoryId);
    // console.log(`Category object: ${JSON.stringify(category)}`);
    expect(category).to.be.a('object');
  });
  it('update a category', async () => {
    const numUpdated = await repository.update({
      id: categoryId,
      photoUrl: 'http://photo.category.content/random-url-for-testing',
      description: 'The photo URL has been updated.',
    });
    // console.log(`Category num updated: ${numUpdated}`);
    expect(numUpdated).to.be.equals(1);
  });
  it('delete a category', async () => {
    const numDeleted = await repository.delete(categoryId);
    // console.log(`Category num deleted: ${numDeleted}`);
    expect(numDeleted).to.be.equals(1);
  });
});
