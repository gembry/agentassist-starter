/**
 * GET /clients
 * Clients Listing
 */
exports.getPropertyBuyer = (req, res) => {
  res.render("propertyBuyer", {
    title: "Add Property Buyer"
  });
};

exports.postPropertyBuyer = (req, res) => {
  res.render("propertyBuyer", {
    title: "Update Property Buyer"
  });
};

/**
   * GET /clients
   * List all clients.
   */
/*
   const Clients = require("../models/Clients.js");
  
  exports.getClients = function(req, res) {
   Clients.find().exec(function(err, clients_list) {
  
     if (err) {
       console.log("error dude");
       return next(err);
     }
  
     //if successful
     res.render("clients", { title: "All Clients", clients: clients_list });
   });
  };
  */
