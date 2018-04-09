// Mongoose schema for Buyer
const mongoose = require("mongoose");

// Create a schema
const documentsSchema = new mongoose.Schema(
  {
    clienttype: String,
    doctype: String,
    docname: String
  },
  { timestamps: true }
);

// Create a model
const documentsSchema = new mongoose.Schema(
    const Documents = mongoose.model("Documents", documentsSchema);

// Make available to the Node app
module.exports = Documents;