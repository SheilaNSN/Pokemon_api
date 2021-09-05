const knex = require('knex');
const databaseConfig = require('./knexfile.js');

const databaseConnection = knex(databaseConfig);

module.exports = { databaseConnection };