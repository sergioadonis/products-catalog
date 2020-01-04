const { Model } = require('objection');
const { CATEGORIES } = require('../constants');

class Category extends Model {
  static get tableName() {
    return CATEGORIES;
  }
}

module.exports = Category;
