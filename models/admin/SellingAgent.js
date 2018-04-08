// Mongoose schema for Buyer
const mongoose = require("mongoose");

// Create a schema
const sellingagentSchema = new mongoose.Schema(
  {
    option: String,
    value: String
  },
  { timestamps: true }
);

// Create a model
const SellingAgent = mongoose.model("SellingAgent", sellingagentSchema);

// Make available to the Node app
module.exports = SellingAgent;