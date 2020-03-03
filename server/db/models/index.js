const User = require("./user");
const Stock = require("./stock");
/**
 associations
 */
Stock.belongsTo(User);
User.hasMany(Stock);

module.exports = {
  User,
  Stock
};
