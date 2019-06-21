// Mongoose schema for Buyer
const mongoose = require("mongoose");

// Create a schema
const buyerSchema = new mongoose.Schema(
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
    buyer_listingagent: String,
    buyer_salestype: String,
    buyer_contractdate: Date,
    buyer_closingdate: Date,
    buyer_notifications: Boolean,
    buyer_star: Boolean
  },
  { timestamps: true }
);

// Create a model
const Buyer = mongoose.model("Buyer", buyerSchema);

// Make available to the Node app
module.exports = Buyer;