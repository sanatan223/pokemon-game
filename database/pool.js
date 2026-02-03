const { Pool } = require('pg');

module.exports = new Pool({
    user: 'postgres',
    password: 'Sanatan@123',
    host: 'localhost',
    port: 5432,
    database: 'my_db'
});