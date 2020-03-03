const router = require("express").Router();
const { Stock } = require("../db/models");

module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    let portfolio = await Stock.findAll({
      where: { userId: req.user.id }
    });
    res.json(portfolio);
  } catch (err) {
    next(err);
  }
});

router.get("/:ticker", async (req, res, next) => {
  try {
    let existing = await Stock.findAll({
      where: {
        ticker: req.params.ticker,
        userId: req.user.id
      }
    });
    res.json(existing);
  } catch (error) {
    next(err);
  }
});

router.put("/:ticker", async (req, res, next) => {
  try {
    let existing = await Stock.findAll({
      where: {
        ticker: req.params.ticker,
        userId: req.user.id
      }
    });
    await existing.update({
      totalQuantity: existing.totalQuantity + req.body.totalQuantity
    });
    res.json(existing);
  } catch (error) {
    next(err);
  }
});
