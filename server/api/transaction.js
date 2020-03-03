const router = require("express").Router();
const axios = require("axios");
const { Transactions } = require("../db/models");
const { Stock } = require("../db/models");
const { User } = require("../db/models");
const { Op } = require("sequelize");
// const {isAfterMarketClose} = require('../../util')
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const transactions = await Transactions.findAll({
      where: { userId: req.user.id },
      order: ["id"]
    });
    res.json(transactions);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  let { ticker, type, quantity } = req.body;
  quantity = +quantity;
  try {
    let stock = await axios.get(
      `https://cloud.iexapis.com/stable/stock/${ticker}/quote?token=${
        process.env.IEX_API
      }`
    );
    stock = stock.data;
    const currUser = await User.findOne({
      where: { id: req.user.id }
    });
    let currentPrice;
    if (stock.iexRealtimePrice) {
      currentPrice = stock.iexRealtimePrice;
    } else {
      currentPrice = stock.latestPrice;
    }
    if (currUser.accountBalance < currentPrice * quantity) {
      throw new Error("Insufficient Fund");
    } else {
      const newTransaction = await Transactions.create({
        type,
        ticker,
        quantity,
        currentPrice
      });
      let currStock = await Stock.findOne({
        where: {
          [Op.and]: [{ ticker: req.body.ticker }, { userId: req.user.id }]
        }
      });
      await currStock.update({
        totalQuantity: currStock.totalQuantity + quantity
      });
      await newTransaction.setUser(currUser);
      await currUser.update(
        {
          accountBalance: currUser.accountBalance - currentPrice * quantity
        },
        { where: { id: req.user.id } }
      );
      res.status(201).json(newTransaction);
    }
  } catch (err) {
    throw new Error(`${ticker} is invalid`);
  }
});
