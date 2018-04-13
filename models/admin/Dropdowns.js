// Mongoose schema for Dropdowns
const mongoose = require("mongoose");

// Create a schema
const dropdownsSchema = new mongoose.Schema(
  {
    optionname: String,
    optionvalue: String
  },
  { timestamps: true }
);

// Create a model
const Dropdowns = mongoose.model("Dropdowns", dropdownsSchema);

// Make available to the Node app
module.exports = Dropdowns;