/**
 * GET /buyer
 * Buyer form page.
 */
exports.getBuyer = (req, res) => {
  res.render("buyer", {
    title: "Buyer"
  });
};

/**
   * POST /buyer
   * Send a buyer form via Nodemailer.
   */

   exports.postBuyer = (req, res) => {
    req.assert('name', 'Name cannot be blank').notEmpty();
    req.assert('email', 'Email is not valid').isEmail();
    req.assert('message', 'Message cannot be blank').notEmpty();
  
    const errors = req.validationErrors();
  
    if (errors) {
      req.flash('errors', errors);
      return res.redirect('/buyer');
    }
  };

