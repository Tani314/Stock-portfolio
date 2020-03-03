"use strict";

const db = require("../server/db");
const { User } = require("../server/db/models");
const { Transactions } = require("../server/db/models");
const { Stock } = require("../server/db/models");

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");

  const users = await Promise.all([
    User.create({
      name: "Richard Hendricks",
      email: "richard@email.com",
      password: "123"
    }),
    User.create({
      name: "Big Head",
      email: "bighead@email.com",
      password: "123"
    })
  ]);
  let transaction = await Transactions.create({
    ticker: "XOM",
    quantity: 1,
    type: "BUY",
    currentPrice: 79.56
  });
  await transaction.setUser(users[0]);
  transaction = await Transactions.create({
    ticker: "FB",
    quantity: 2,
    type: "BUY",
    currentPrice: 29.65
  });
  await transaction.setUser(users[0]);
  transaction = await Transactions.create({
    ticker: "FB",
    quantity: 5,
    type: "BUY",
    currentPrice: 29.65
  });
  await transaction.setUser(users[0]);
  transaction = await Transactions.create({
    ticker: "AAPL",
    quantity: 10,
    type: "BUY",
    currentPrice: 979.56
  });
  await transaction.setUser(users[1]);
  transaction = await Transactions.create({
    ticker: "XOM",
    quantity: 10,
    type: "BUY",
    currentPrice: 790.56
  });
  await transaction.setUser(users[1]);

  const stock = await Promise.all([
    Stock.create({
      ticker: "XOM",
      totalQuantity: 1,
      userId: 1
    }),
    Stock.create({
      ticker: "FB",
      totalQuantity: 7,
      userId: 1
    }),
    Stock.create({
      ticker: "AAPL",
      totalQuantity: 10,
      userId: 2
    }),
    Stock.create({
      ticker: "XOM",
      totalQuantity: 10,
      userId: 2
    })
  ]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
}

async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

if (module === require.main) {
  runSeed();
}
