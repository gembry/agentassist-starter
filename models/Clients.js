// Mongoose schema for Clients
const mongoose = require("mongoose");

const clientsSchema = new mongoose.Schema(
  {
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
  { timestamps: true }
);

var Clients = mongoose.model("Clients", clientsSchema);
module.exports = Clients;