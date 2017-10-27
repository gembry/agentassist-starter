const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema(
  {
    basic_information: {
        client_firstname: String,
        client_lastname: String,
        client_cellphone: String,
        client_homephone: String,
        client_email: String,
        client_address: String,
        client_city: String,
        client_state: String,
        client_zip: String,
        client_notifications: String
    },
    tokens: Array
  },
  { timestamps: true }
);

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
