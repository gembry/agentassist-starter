const Dropdown = require("../../models/admin/Dropdowns");

// Setup empty object
const defaultDropdowns = new Dropdown({
  optionname: null,
  optionvalue: null
});

/**
 * GET dropdowns form ready for insert or update
 */
exports.getDropdowns = (req, res) => {
  if (req.params.document) {

    // Find existing document(s)
    Promise.all([
      Dropdown.findOne({ _id: req.params.document }),
      Dropdown.find()
    ]).then( ([ document, dropdowns ]) => {
      // Render to the pug view - ready for PUT
      res.render("admin/dropdowns", {
        title: "Update Dropdowns Types",
        method: "PUT",
        document: document,
        dropdowns: dropdowns
      });
    });

  } else {

    Dropdown.find().exec(function(err, dropdowns_list) {
      if (err) {
        console.log("error dude");
        return next(err);
      }

      res.render("admin/dropdowns", {
        title: "Add Dropdown Values",
        document: defaultDropdowns,
        dropdowns: dropdowns_list
      });
    });

  }
};


exports.postDropdowns = (req, res) => {
  res.render("admin/dropdowns", {
    title: "Add dropdown..."
  });
};
