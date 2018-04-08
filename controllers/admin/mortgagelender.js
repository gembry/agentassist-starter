const MortgageLender = require("../admin/MortgageLender");

exports.getMortgageLender = (req, res) => {
  res.render("admin/mortgagelender", {
    title: "Add Mortgage Lender..."
  });
};

exports.postMortgageLender = (req, res) => {
  res.render("admin/mortgagelender", {
    title: "Add Mortgage Lender..."
  });
};
