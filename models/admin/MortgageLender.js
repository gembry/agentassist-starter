// Mongoose schema for Buyer
const mongoose = require("mongoose");

// Create a schema
const mortgagelenderSchema = new mongoose.Schema(
  {
    option: String,
    value: String
  },
  { timestamps: true }
);

// Create a model
const MortgageLender = mongoose.model("MortgageLender", mortgagelenderSchema);

// Make available to the Node app
module.exports = MortgageLender;