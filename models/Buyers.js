// Mongoose schema for Buyers
const mongoose = require("mongoose");

const buyersSchema = new mongoose.Schema(
  {
    buyer_address: String,
    buyer_city: String,
    buyer_state: String,
    buyer_zip: Number,
    buyer_clientIDs: String,
    buyer_purchaseprice: Number,
    buyer_earnestprice: Number,
    buyer_concession: Number,
    buyer_titlecompany: String,
    buyer_mortgagelender: String,
    buyer_sellingagent: String,
    buyer_salestype: String,
    buyer_contractdate: Date,
    buyer_closingdate: Date,
    buyer_notifications: Boolean
  },
  { timestamps: true }
);

const Buyers = mongoose.model("Buyers", buyersSchema);
module.exports = Buyers;
