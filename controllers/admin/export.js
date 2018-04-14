const Client = require("../../models/Client");
const Buyer = require("../../models/Buyer");

exports.getExport = (req, res) => {
  res.render("admin/export", {
    title: "Export CSV Data"
  });
};

exports.getExportclients = (req, res) => {
  var filename = "clients.csv";
  var dataArray;

  Client.find()
    .lean()
    .exec({}, function(err, clients) {
      if (err) res.send(err);

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/csv");
      res.setHeader("Content-Disposition", "attachment; filename=" + filename);
      res.csv(clients, true);
    });
};

exports.getExportbuyers = (req, res) => {
  var filename = "buyers.csv";
  var dataArray;

  Buyer.find()
    .lean()
    .exec({}, function(err, buyers) {
      if (err) res.send(err);

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/csv");
      res.setHeader("Content-Disposition", "attachment; filename=" + filename);
      res.csv(buyers, true);
    });
};
