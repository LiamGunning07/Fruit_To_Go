require('dotenv').config();
const { Pool } = require('pg');

// Corrected dbParams object with the correct property names
const dbParams = {
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  port: process.env.DATABASE_PORT
};

const db = new Pool(dbParams);

db.connect()
  .then(() => console.log(`Connected to database: ${dbParams.database}`))
  .catch(error => console.log(`Unable to connect. Error: ${error}`));

module.exports = db;