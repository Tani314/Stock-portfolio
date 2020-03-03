const Sequelize = require("sequelize");
const db = require("../db");

const Stock = db.define("stock", {
  symbol: {
    type: Sequelize.STRING
  },
  quantity: {
    type: Sequelize.INTEGER
  },
  price: {
    type: Sequelize.DECIMAL(10, 2)
  }
});

module.exports = Stock;
