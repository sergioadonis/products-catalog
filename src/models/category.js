const BaseModel = require('./baseModel');
const { CATEGORIES } = require('../constants');

class Category extends BaseModel {
  static get tableName() {
    return CATEGORIES;
  }
}

module.exports = Category;
