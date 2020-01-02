const BaseModel = require('./baseModel');
const { CATEGORIES } = require('../contants');

class Category extends BaseModel {
  static get tableName() {
    return CATEGORIES;
  }
}

module.exports = Category;
