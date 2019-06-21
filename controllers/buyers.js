/**
 * GET /clients & /client models
 */
const Buyer = require("../models/Buyer");

/**
 * GET /clients
 * Clients Listing
 */
exports.getBuyers = function(req, res) {
  // Note: sort - 1 for asc and -1 for desc
  Buyer.find().sort( { buyer_star: -1, updatedAt: -1 } ).exec(function(err, buyers_list) {
    if (err) {
      console.log("error dude");
      return next(err);
    }

    //if successful
    res.render("buyers", {
      title: "All Buyer Offers",
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
