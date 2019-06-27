// Mongoose schema for dropbox
const mongoose = require("mongoose");

// Create a schema
const dropboxSchema = new mongoose.Schema(
	{
		client_modified: String,
		content_hash: String,
		id: String,
		is_downloadable: Boolean,
		name: String,
		path_display: String,
		path_lower: String,
		rev: String,
		server_modified: Date,
		size: Number
	},
	{ timestamps: true }
);

// Create a model
const dropbox = mongoose.model("dropbox", dropboxSchema);

// Make available to the Node app
module.exports = dropbox;