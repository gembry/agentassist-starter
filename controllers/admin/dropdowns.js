const Dropdowns = require("../admin/Dropdowns");

exports.getDropdowns = (req, res) => {
  res.render("admin/dropdowns", {
    title: "Add dropdown..."
  });
};

exports.postDropdowns = (req, res) => {
  res.render("admin/dropdowns", {
    title: "Add dropdown..."
  });
};
