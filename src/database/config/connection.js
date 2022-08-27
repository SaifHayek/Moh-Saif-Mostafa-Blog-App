const { Pool } = require('pg');
require('env2')('.env');

const {
  DEV_DB, DATABASE_URL, TEST_DB, NODE_ENV,
} = process.env;
let connectionString = '';
if (NODE_ENV === 'pro') {
  connectionString = DATABASE_URL;
} else if (NODE_ENV === 'dev') {
  connectionString = DEV_DB;
} else if (NODE_ENV === 'test') {
  connectionString = TEST_DB;
} else {
  throw new Error('DB URL is not valid');
}
const connection = new Pool({
  connectionString,
  ssl: false,
});

module.exports = connection;
