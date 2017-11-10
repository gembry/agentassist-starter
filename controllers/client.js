const Client = require("../models/Client");

/**
 * GET /client
 */
exports.getClient = (req, res) => {

  if (req.params.client) {
    // find & update existing client

    Client.findOne({ _id: req.params.client }, (err, existingClient) => {

      
      //console.log(existingClient);    
      res.render("client", {
        title: "Get Client UPDATE",
        client: existingClient
        // , user: req.user
      });  
  
      //if (err) { return next(err); }
        //if (existingClient) {
          //req.flash('errors', { msg: 'Account with that email address already exists.' });
          //return res.redirect('/signup');
      //}
      
      //client.save((err) => {
        //if (err) { return next(err); }
          //req.logIn(user, (err) => {
            //if (err) {
              //return next(err);
            //}
        //res.redirect('/');
      //});
    });

  } else {
    // create new client
    res.render("client", {
        title: "Get Client INSERT"
    });  
  }  

};

/**
 * POST /client
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

  const client = new Client({
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

  client.save(err => {

    if (err) {
      console.log(err);
    }
    console.log(res);
    
    res.redirect("/client");
  });
};

/**
 * PUT /client
 */
exports.putClient = (req, res) => {
  res.render("client", {
    title: "Put Client"
  });
};

/**
 * DELETE (aka archive) /client
 * Not really going to delete anything
 */
exports.deleteClient = (req, res) => {
  res.render("client", {
    title: "Delete Client"
  });
};
