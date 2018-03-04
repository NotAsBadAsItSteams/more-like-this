require('dotenv').config();
const path = require('path');

module.exports = {
  client: 'pg',
  connection: {
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
  },
  migrations: {
    directory: path.join(__dirname, '/db/migrations'),
  },
  seeds: {
    directory: path.join(__dirname, '/db/seeds'),
  },
};
