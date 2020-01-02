const { Model } = require('objection');
const knex = require('../config/knex');

// Give the knex instance to objection.
Model.knex(knex);

class BaseModel extends Model {}

module.exports = BaseModel;
