/* eslint-disable object-curly-newline */
/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
const { describe, it } = require('mocha');
const { expect } = require('chai');

const knex = require('../src/connection');
const { CategoryRepository } = require('../src/repositories');

const repository = new CategoryRepository(knex);
let categoryId = null;

describe('Category model repository', () => {
  it('create a category', async () => {
    const category = await repository.create({
      name: 'Name for testing',
      description: '',
    });
    categoryId = category.id;
    expect(category)
      .to.be.a('object')
      .and.to.include({
        id: categoryId,
        name: 'Name for testing',
        description: '',
      });
  });

  it('update a category', async () => {
    const numUpdated = await repository.update({
      id: categoryId,
      photoUrl: 'http://photo.category.content/random-url-for-testing',
      description: 'The photo URL has been updated.',
    });
    expect(numUpdated).to.be.equals(1);
  });

  it('get a category by id', async () => {
    const category = await repository.findById(categoryId);
    expect(category)
      .to.be.a('object')
      .and.includes({
        id: categoryId,
        name: 'Name for testing',
        photoUrl: 'http://photo.category.content/random-url-for-testing',
        description: 'The photo URL has been updated.',
      });
  });

  it('list categories', async () => {
    const categoryList = await repository.findAll();
    expect(categoryList)
      .to.be.a('array')
      .and.deep.includes({
        id: categoryId,
        name: 'Name for testing',
        photoUrl: 'http://photo.category.content/random-url-for-testing',
        description: 'The photo URL has been updated.',
      });
  });

  it('delete a category', async () => {
    const numDeleted = await repository.delete(categoryId);
    expect(numDeleted).to.be.equals(1);
  });
});
