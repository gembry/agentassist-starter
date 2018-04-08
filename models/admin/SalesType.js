s// Mongoose schema for Buyer
const mongoose = require("mongoose");

// Create a schema
const salestypeSchema = new mongoose.Schema(
  {
    option: String,
    value: String
  },
  { timestamps: true }
);

// Create a model
const SalesType = mongoose.model("SalesType", salestypeSchema);

// Make available to the Node app
module.exports = SalesType;