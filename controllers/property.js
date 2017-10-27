/**
 * GET /clients
 * Clients Listing
 */
exports.getProperty = (req, res) => {
    res.render("property", {
      title: "Property"
    });
  };

exports.postProperty = (req, res) => {
res.render("property", {
    title: "Property"
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