const { Pool } = require('pg');

module.exports = new Pool({
    connectionString: "postgresql://neondb_owner:npg_2QAlphUeJtY1@ep-rapid-pond-aig4rtoq-pooler.c-4.us-east-1.aws.neon.tech/poke-container?sslmode=require&channel_binding=require"
});