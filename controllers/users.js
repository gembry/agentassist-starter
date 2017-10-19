/**
 * GET /users
 * List all users.
 */
const Users = require("../models/Users.js");
 
exports.getUsers = function(req, res) {
  Users.find().exec(function(err, users_list) {

    if (err) {
      console.log("error dude");
      return next(err);
    }

    //if successful
    res.render("users", { title: "All Users", users: users_list });
  });
};
