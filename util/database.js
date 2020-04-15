const Sequelize = require('sequelize');

const sequelize = new Sequelize('express-online-shop', 'root', 'karthik1', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
