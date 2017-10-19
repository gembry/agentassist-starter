const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema(
  {
    basic_information: {
        seller_firstname: String,
        seller_lastname: String,
        seller_cellphone: String,
        seller_homephone: String,
        seller_email: String,
        seller_address: String,
        seller_city: String,
        seller_state: String,
        seller_zip: String
    },
    tokens: Array
  },
  { timestamps: true }
);

const Seller = mongoose.model("Seller", sellerSchema);

module.exports = Seller;
