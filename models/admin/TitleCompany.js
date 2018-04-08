// Mongoose schema for Buyer
const mongoose = require("mongoose");

// Create a schema
const titlecompanySchema = new mongoose.Schema(
  {
    option: String,
    value: String
  },
  { timestamps: true }
);

// Create a model
const TitleCompany = mongoose.model("TitleCompany", titlecompanySchema);

// Make available to the Node app
module.exports = TitleCompany;