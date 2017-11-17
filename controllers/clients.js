/**
 * GET /clients & /client models
 */
const Client = require("../models/Client");
const Clients = require("../models/Clients");

exports.getClients = function(req, res) {
  Clients.find().exec(function(err, clients_list) {
    if (err) {
      console.log("error dude");
      return next(err);
    }

    //if successful
    res.render("clients", {
      title: "All Clients",
      clients: clients_list
    });
  });
};

/**
 * DELETE client
 */
exports.deleteClient = (req, res) => {
  Client.remove(
    {
      _id: req.params.client
    },
    function(err, client) {
      if (err) res.send(err);

      req.flash("success", { msg: "Client information has been deleted." });
      res.redirect("/clients");
      //res.json({ message: "Successfully deleted" });
    }
  );
};
