const { Sequelize } = require('sequelize');

const db = new Sequelize({
  database: 'chat_db',
  host: 'localhost',
  port: 5432,
  username: 'camunozn',
  password: 'root',
  dialect: 'postgres',
});

module.exports = db;
