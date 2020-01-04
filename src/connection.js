const Knex = require('knex');
const config = require('../knexfile');

// Initialize knex.
const knexConnection = Knex(config);

module.exports = knexConnection;
