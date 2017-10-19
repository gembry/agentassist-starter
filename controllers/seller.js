const Seller = require("../models/Seller");

/**
 * GET /seller
 * Seller form page.
 */
exports.getSeller = (req, res) => {
  res.render("seller", {
    title: "Seller"
  });
};

/**
 * POST /seller
 */
exports.postSeller = (req, res) => {
  req.assert("seller_firstname", "First name cannot be blank").notEmpty();
  req.assert("seller_lastname", "Last name cannot be blank").notEmpty();
  /*req.assert("seller_email", "Email is not valid").isEmail();*/

  const errors = req.validationErrors();

  if (errors) {
    req.flash("errors", errors);
    return res.redirect("/seller");
  }

  const seller = new Seller({
    seller_firstname: req.body.seller_firstname,
    seller_lastname: req.body.seller_lastname,
    seller_cellphone: req.body.seller_cellphone,
    seller_homephone: req.body.seller_homephone,
    seller_email: req.body.seller_email,
    seller_address: req.body.seller_address,
    seller_city: req.body.seller_city,
    seller_state: req.body.seller_state,
    seller_zip: req.body.seller_zip
  });

  seller.save(err => {

    console.log("yahoo");

    if (err) {
      console.log(err);
    }

    
    res.redirect("/seller");
  });
};
