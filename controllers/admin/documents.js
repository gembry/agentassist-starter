const Document = require("../../models/admin/Documents");

// Setup empty object
const defaultDocuments = new Document({
  clienttype: null,
  doctype: null,
  docname: null
});

/**
 * GET /clients
 * Clients Listing
 */
// exports.getDocuments = function(req, res) {
//   Document.find().exec(function(err, documents_list) {
//     if (err) {
//       console.log("error dude");
//       return next(err);
//     }

//     //if successful
//     res.render("admin/documents", {
//       title: "All Documents",
//       documents: documents_list
//     });
//   });
// };

var async = require('async');

function getDocument(id, callback) {
  db.collection('queryes', function(err, collection) {
    collection.findOne({'_id':id}, callback);
  });
}

function getDocuments(callback) {
  db.collection('questions', function(err, collection) {
    collection.find().toArray(callback);
  });
}

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
  // req.assert("buyer_firstname", "First name cannot be blank").notEmpty();
  // req.assert("buyer_lastname", "Last name cannot be blank").notEmpty();
  // req.assert("buyer_email", "Email is not valid").isEmail();

  // const errors = req.validationErrors();

  // if (errors) {
  //   req.flash("errors", errors);
  //   return res.redirect("/buyer");
  // }

  Document.findById(req.params.buyer, (err, updateDocuments) => {
    if (err) {
      console.log(err);
      //return next(err);
    }

    updateDocuments.clienttype = req.body.clienttype,
    updateDocuments.doctype = req.body.doctype,
    updateDocuments.docname = req.body.docname;

    updateDocuments.save(err => {
      // if (err) {
      //   if (err.code === 11000) {
      //     req.flash('errors', { msg: 'The email address you have entered is already associated with an account.' });
      //     return res.redirect('/documents');
      //   }
      //   return next(err);
      // }
      req.flash("success", { msg: "Documents information has been updated." });
      res.redirect("/documents");
    });
  });
};
