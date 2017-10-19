/**
 * GET /dashboard
 * Dashboard form page.
 */
exports.getDashboard = (req, res) => {
    res.render("dashboard", {
      title: "Dashboard"
    });
  };
  