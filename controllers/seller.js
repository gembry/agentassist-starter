/**
 * GET /clients
 * Clients Listing
 */
exports.getSeller = (req, res) => {
    res.render("seller", {
      title: "Add Property Seller"
    });
  };

exports.postSeller = (req, res) => {
res.render("seller", {
    title: "Update Property Seller"
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