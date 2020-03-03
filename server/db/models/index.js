const User = require("./user");
const Stock = require("./stock");
const Transactions = require("./transactions");
/**
 associations
 */
Stock.belongsTo(User);
User.hasMany(Stock);

Transactions.belongsTo(User);
User.hasMany(Transactions);

module.exports = {
  User,
  Stock,
  Transactions
};
