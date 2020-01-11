const { Category } = require('../models');

class CategoryRepository {
  constructor(knex) {
    Category.knex(knex);
    this.model = Category;
  }

  async findAll() {
    return this.model.query().select();
  }

  async findById(id) {
    return this.model.query().findById(id);
  }

  async create(category) {
    return this.model.query().insert(category);
  }

  async update(category) {
    return this.model
      .query()
      .patch(category)
      .where('id', category.id);
  }

  async delete(id) {
    return this.model
      .query()
      .delete()
      .where('id', id);
  }
}

module.exports = CategoryRepository;
