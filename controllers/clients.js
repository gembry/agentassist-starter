/**
 * GET /clients & /client models
 */
const Client = require("../models/Client");
// const Clients = require("../models/Clients");

exports.getClients = function(req, res) {
  Client.find().exec(function(err, clients_list) {
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

exports.getClientsJSON = (req, res) => {
  var keyword = req.query.keyword; // URL 

  Client.find({
    $or: [
      { client_firstname: {$regex: new RegExp(keyword, "i")} },
      { client_lastname:  {$regex: new RegExp(keyword, "i")} }
    ]    
  }).exec(function(err, clients_list) {
    if (err) {
      console.log("error dude");
      return next(err);
    }

    //if successful
    res.json(clients_list);
  });

  // res.json({});
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
