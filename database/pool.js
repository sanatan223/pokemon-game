const { Pool } = require('pg');

module.exports = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'my_db',
  password: 'Sanatan@123',
  port: 5432,
});