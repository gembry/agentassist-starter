const Dropdown = require("../../models/admin/Dropdowns");

// Setup empty object
const defaultDropdowns = new Dropdown({
  dropdownname: null,
  optionvalue: null
});

/**
 * GET dropdowns form ready for insert or update
 */
exports.getDropdowns = (req, res) => {
  if (req.params.dropdown) {

    // Find existing dropdown(s)
    Promise.all([
      Dropdown.findOne({ _id: req.params.dropdown }),
      Dropdown.find()
    ]).then( ([ dropdown, dropdowns ]) => {
      // Render to the pug view - ready for PUT
      res.render("admin/dropdowns", {
        title: "Update Dropdown Values",
        method: "PUT",
        dropdown: dropdown,
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
        dropdown: defaultDropdowns,
        dropdowns: dropdowns_list
      });
    });

  }
};

/**
 * POST/INSERT form data
 */
exports.postDropdowns = (req, res) => {

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

  const insertDropdown = new Dropdown({
    dropdownname: req.body.dropdownname,
    optionvalue: req.body.optionvalue
  });

  insertDropdown.save(err => {
    if (err) {
      console.log(err);
    }

    req.flash("success", { msg: "Dropdown information has been added." });
    res.redirect("dropdowns");
  });
};

/**
 * PUT/UPDATE form data
 */
exports.putDropdowns = (req, res) => {

  Dropdown.findById(req.params.dropdown, (err, updateDropdowns) => {
    if (err) {
      console.log(err);
      //return next(err);
    }

    updateDropdowns.dropdownname = req.body.dropdownname,
    updateDropdowns.optionvalue = req.body.optionvalue;

    updateDropdowns.save(err => {
      req.flash("success", { msg: "Dropdown information has been updated." });
      res.redirect("/admin/dropdowns");
    });

  });
};

/**
 * DELETE buyer
 */
exports.deleteDropdown = (req, res) => {
  console.log('delete...........');
  Dropdown.remove(
    {
      _id: req.params.dropdown
    },
    function(err, dropdown) {
      if (err) res.send(err);

      req.flash("success", { msg: "Dropdown information has been deleted." });
      res.redirect("/admin/dropdowns");
      //res.json({ message: "Successfully deleted" });
    }
  );
};