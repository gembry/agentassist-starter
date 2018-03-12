/**
 * GET /client model
 */
const Buyer = require("../models/Buyer");

/**
 * GET /clients
 * Buyers Listing
 */
exports.getBuyer = (req, res) => {
  res.render("buyer", {
    title: "Add Property Buyer"
  });
};

/**
 * POST/INSERT client form data
 */
exports.postBuyer = (req, res) => {
  console.log('post buyer');
  // req.assert("client_firstname", "First name cannot be blank").notEmpty();
  // req.assert("client_lastname", "Last name cannot be blank").notEmpty();
  // req.assert("client_email", "Email is not valid").isEmail();
  // const errors = req.validationErrors();

  // if (errors) {
  //   req.flash("errors", errors);
  //   return res.redirect("/client");
  // }

 

  const insertBuyer = new Buyer({
    buyer_address: req.body.buyer_address,
    buyer_city: req.body.buyer_city,
    buyer_state: req.body.buyer_state,
    buyer_zip: req.body.buyer_zip,
    buyer_clientIDs: req.body.buyer_clientIDs,
    buyer_purchaseprice: req.body.buyer_purchaseprice.split(',').join(''),
    buyer_earnestprice: req.body.buyer_earnestprice.split(',').join(''),
    buyer_concession: req.body.buyer_concession.split(',').join(''),
    buyer_titlecompany: req.body.buyer_titlecompany,
    buyer_mortgagelender: req.body.buyer_mortgagelender,
    buyer_sellingagent: req.body.buyer_sellingagent,
    buyer_salestype: req.body.buyer_salestype,
    buyer_contractdate: req.body.buyer_contractdate,
    buyer_closingdate: req.body.buyer_closingdate,
    buyer_notifications: req.body.buyer_notifications ? true : false
  });
  console.log(insertBuyer);

  insertBuyer.save(err => {
    if (err) {
      console.log(err);
    }

    req.flash("success", { msg: "Buyer information has been added." });
    res.redirect("/buyer");
  });
};


/**
   * GET /clients
   * List all clients.
   */
/*
   const Buyers = require("../models/Buyers.js");
  
  exports.getBuyers = function(req, res) {
   Buyers.find().exec(function(err, clients_list) {
  
     if (err) {
       console.log("error dude");
       return next(err);
     }
  
     //if successful
     res.render("clients", { title: "All Buyers", clients: clients_list });
   });
  };
  */
