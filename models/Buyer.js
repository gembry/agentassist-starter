// Mongoose schema for Buyer
const mongoose = require("mongoose");

const buyerSchema = new mongoose.Schema(
  {
    buyer_address: String,
    buyer_city: String,
    buyer_state: String,
    buyer_zip: Number,
    buyer_IDs: String,
    buyer_purchaseprice: Number,
    buyer_earnestprice: Number,
    buyer_buyerconcession: Number,
    buyer_titlecompany: Number,
    buyer_mortgagelender: Number,
    buyer_sellingagent: Number,
    buyer_salestype: Number,
    buyer_listdate: Date,
    buyer_closingdate: Date
  },
  { timestamps: true }
);

const Buyer = mongoose.model("Buyer", buyerSchema);
module.exports = Buyer;
