// Mongoose schema for Auditlog
const mongoose = require("mongoose");

// Create a schema
const auditlogSchema = new mongoose.Schema(
	{
		url: String,
		description: String,
		user: String,
		changes: []
	},
	{ timestamps: true }
);

// Create a model
const Auditlog = mongoose.model("Auditlog", auditlogSchema);

// Make available to the Node app
module.exports = Auditlog;
