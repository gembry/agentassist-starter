// Mongoose schema for Buyer
const mongoose = require("mongoose");

// Create a schema
const dropdownsSchema = new mongoose.Schema(
  {
    option: String,
    value: String
  },
  { timestamps: true }
);

// Create a model
const Dropdowns = mongoose.model("MortgageLender", dropdownsSchema);

// Make available to the Node app
module.exports = Dropdowns;