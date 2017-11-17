/**
 * GET /client model
 */
const Client = require("../models/Client");

// Setup empty client object
// Use this in the future to setup form defaults (just an idea)
const defaultClient = new Client({
  client_firstname: null,
  client_lastname: null,
  client_cellphone: null,
  client_homephone: null,
  client_email: null,
  client_address: null,
  client_city: null,
  client_state: null,
  client_zip: null,
  client_notifications: false
});

/**
 * GET client form ready for insert or update
 */
exports.getClient = (req, res) => {
  if (req.params.client) {
    // find existing client
    Client.findOne({ _id: req.params.client }, (err, updateClient) => {
      if (err) {
        console.log(err);
        //return next(err);
      }
      // Render to the pug view - ready for PUT
      res.render("client", {
        title: "Update Client",
        client: updateClient,
        method: "PUT"
      });
    });
  } else {
    // Render to the pug view - ready for POST
    res.render("client", {
      title: "Add Client",
      client: defaultClient,
      method: "POST"
    });
  }
};

/**
 * POST/INSERT client form data
 */
exports.postClient = (req, res) => {
  req.assert("client_firstname", "First name cannot be blank").notEmpty();
  req.assert("client_lastname", "Last name cannot be blank").notEmpty();
  req.assert("client_email", "Email is not valid").isEmail();

  const errors = req.validationErrors();

  if (errors) {
    req.flash("errors", errors);
    return res.redirect("/client");
  }

  const insertClient = new Client({
    client_firstname: req.body.client_firstname,
    client_lastname: req.body.client_lastname,
    client_cellphone: req.body.client_cellphone,
    client_homephone: req.body.client_homephone,
    client_email: req.body.client_email,
    client_address: req.body.client_address,
    client_city: req.body.client_city,
    client_state: req.body.client_state,
    client_zip: req.body.client_zip,
    client_notifications: req.body.client_notifications ? true : false
  });

  insertClient.save(err => {
    if (err) {
      console.log(err);
    }

    req.flash("success", { msg: "Client information has been added." });
    res.redirect("/clients");
  });
};

/**
 * PUT/UPDATE client form data
 */
exports.putClient = (req, res) => {
  req.assert("client_firstname", "First name cannot be blank").notEmpty();
  req.assert("client_lastname", "Last name cannot be blank").notEmpty();
  req.assert("client_email", "Email is not valid").isEmail();

  const errors = req.validationErrors();

  if (errors) {
    req.flash("errors", errors);
    return res.redirect("/client");
  }

  Client.findById(req.params.client, (err, updateClient) => {
    if (err) {
      console.log(err);
      //return next(err);
    }

    updateClient.client_firstname = req.body.client_firstname;
    updateClient.client_lastname = req.body.client_lastname;
    updateClient.client_cellphone = req.body.client_cellphone;
    updateClient.client_homephone = req.body.client_homephone;
    updateClient.client_email = req.body.client_email;
    updateClient.client_address = req.body.client_address;
    updateClient.client_city = req.body.client_city;
    updateClient.client_state = req.body.client_state;
    updateClient.client_zip = req.body.client_zip;
    updateClient.client_notifications = req.body.client_notifications
      ? true
      : false;

    updateClient.save(err => {
      // if (err) {
      //   if (err.code === 11000) {
      //     req.flash('errors', { msg: 'The email address you have entered is already associated with an account.' });
      //     return res.redirect('/clients');
      //   }
      //   return next(err);
      // }
      req.flash("success", { msg: "Client information has been updated." });
      res.redirect("/clients");
    });
  });
};
