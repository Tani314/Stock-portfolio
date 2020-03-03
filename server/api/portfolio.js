const router = require("express").Router();
const { Stock } = require("../db/models");
const axios = require("axios");

module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    let portfolio = await Stock.findAll({
      where: { userId: req.user.id }
    });
    let allData = portfolio.map(async stock => {
      try {
        const allStock = await axios.get(
          `https://cloud.iexapis.com/stable/stock/${stock.ticker}/quote?token=${
            process.env.IEX_API
          }`
        );
        stock.dataValues.openprice = allStock.data.previousClose;
        stock.dataValues.currPrice = allStock.data.iexRealtimePrice;
        return stock;
      } catch (error) {
        next(error);
      }
    });
    portfolio = await Promise.all(allData);
    res.json(portfolio);
  } catch (err) {
    next(err);
  }
});
