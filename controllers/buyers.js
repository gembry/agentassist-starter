/**
 * GET /clients & /client models
 */
const Buyer = require("../models/Buyer");
const Buyers = require("../models/Buyers");

/**
 * GET /clients
 * Clients Listing
 */
exports.getBuyers = function(req, res) {
  Buyers.find().exec(function(err, buyers_list) {
    if (err) {
      console.log("error dude");
      return next(err);
    }

    //if successful
    res.render("buyers", {
      title: "All Buyers",
      buyers: buyers_list
    });
  });
};

/**
 * DELETE buyer
 */
exports.deleteBuyer = (req, res) => {
  Buyer.remove(
    {
      _id: req.params.buyer
    },
    function(err, buyer) {
      if (err) res.send(err);

      req.flash("success", { msg: "Buyer information has been deleted." });
      res.redirect("/buyers");
      //res.json({ message: "Successfully deleted" });
    }
  );
};
