const Document = require("../../models/admin/Documents");

// Setup empty object
const defaultDocuments = new Document({
  clienttype: null,
  doctype: null,
  docname: null
});

/**
 * GET documents form ready for insert or update
 */
exports.getDocuments = (req, res) => {
  if (req.params.document) {

    // Find existing document(s)
    Promise.all([
      Document.findOne({ _id: req.params.document }),
      Document.find()
    ]).then( ([ document, documents ]) => {
      // Render to the pug view - ready for PUT
      res.render("admin/documents", {
        title: "Update Document Types",
        method: "PUT",
        document: document,
        documents: documents
      });
    });

  } else {

    Document.find().exec(function(err, documents_list) {
      if (err) {
        console.log("error dude");
        return next(err);
      }

      res.render("admin/documents", {
        title: "Add Document Types",
        document: defaultDocuments,
        documents: documents_list
      });
    });

  }
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

  const insertDocument = new Document({
    clienttype: req.body.clienttype,
    doctype: req.body.doctype,
    docname: req.body.docname
  });

  insertDocument.save(err => {
    if (err) {
      console.log(err);
    }

    req.flash("success", { msg: "Document information has been added." });
    res.redirect("documents");
  });
};

/**
 * PUT/UPDATE form data
 */
exports.putDocuments = (req, res) => {

  Document.findById(req.params.document, (err, updateDocuments) => {
    if (err) {
      console.log(err);
      //return next(err);
    }

    updateDocuments.clienttype = req.body.clienttype,
    updateDocuments.doctype = req.body.doctype,
    updateDocuments.docname = req.body.docname;

    updateDocuments.save(err => {
      req.flash("success", { msg: "Document information has been updated." });
      res.redirect("/admin/documents");
    });

  });
};

/**
 * DELETE buyer
 */
exports.deleteDocument = (req, res) => {
  Document.remove(
    {
      _id: req.params.document
    },
    function(err, document) {
      if (err) res.send(err);

      req.flash("success", { msg: "Document information has been deleted." });
      res.redirect("/admin/documents");
      //res.json({ message: "Successfully deleted" });
    }
  );
};