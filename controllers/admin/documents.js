const Document = require("../admin/Documents");

exports.getDocuments = (req, res) => {
  res.render("admin/documents", {
    title: "Add documents..."
  });
};

/**
 * POST/INSERT form data
 */
exports.postDocuments = (req, res) => {

  // req.assert("buyer_firstname", "First name cannot be blank").notEmpty();
  // req.assert("buyer_lastname", "Last name cannot be blank").notEmpty();
  // req.assert("buyer_email", "Email is not valid").isEmail();
  // const errors = req.validationErrors();

  // if (errors) {
  //   req.flash("errors", errors);
  //   return res.redirect("/buyer");
  // }

  // smaller data will compare faster than larger data
  // Use ids (numeric) for drop-downs ???

 
  // const insertDocument = new Document({
  //   clienttype: req.body.clienttype,
  //   doctype: req.body.doctype,
  //   docname: req.body.docname
  // });

  res.render("admin/documents", {
    title: "Add documents..."
  });

  // insertDocument.save(err => {
  //   if (err) {
  //     console.log(err);
  //   }

  //   req.flash("success", { msg: "Document information has been added." });
  //   res.redirect("admin/documents");
  // });
};