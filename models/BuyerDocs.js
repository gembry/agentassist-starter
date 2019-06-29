// Mongoose schema for Buyer
const mongoose = require("mongoose");

const buyerDocsSchema = new mongoose.Schema(
{
	client_modified: Date,
	content_hash: String,
	id: String,
	is_downloadable: Boolean,
	name: String,
	path_display: String,
	path_lower: String,
	rev: String,
	server_modified: Date,
	size: Number,
	user: String
},
{ timestamps: true }
);

// Create a model
const BuyerDocs = mongoose.model("BuyerDocs", buyerDocsSchema);

// Make available to the Node app
module.exports = BuyerDocs;