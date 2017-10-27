/**
 * GET /client
 * Clients form page.
 */
exports.getClients = (req, res) => {
  res.render("clients", {
    title: "Clients"
  });
};
