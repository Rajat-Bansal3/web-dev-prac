const express = require("express");
const mongoose = require("mongoose");
const { authMiddleware } = require("../middleware");
const { Account } = require("../db.js");

const router = express.Router();

router.get("/balance", authMiddleware, async (req, res, next) => {
  const account = await Account.findOne({ userId: req.userId });
  res.status(200).json({
    success: true,
    message: "successfully retreived balance",
    balance: account.balance,
  });
});

router.post("/transfer", async (req, res, next) => {
  const session = mongoose.startSession();
  session.startTransaction();
  const { amount, to } = req.body;
  const account = await Account.findOne({ userId: req.userId }).session(session);
  if (!account || account.balance< amount ){
    return res.status(400).json({success:false,message:"issufficient balance or invalid account"})
  }
  const toSendAccount = await Account.findOne({userId: to}).session(session);
});
module.exports = router;
