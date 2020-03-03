const Sequelize = require("sequelize");
const db = require("../db");

const Transactions = db.define("transactions", {
  ticker: {
    type: Sequelize.STRING,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
    values: ["BUY", "SELL"]
  },
  currentPrice: {
    type: Sequelize.DECIMAL,
    allowNull: false
  }
});

module.exports = Transactions;
