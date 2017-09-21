/**
 * GET /users
 * List all users.
 */
const Users = require("../models/Users.js");

exports.getUsers = (req, res) => {

  console.log(Users);
  Users.find((err, docs) => {
    res.render("users", { users: docs });
  });

  //res.render('users', {
  //  title: 'Users Management'
  //});
};
