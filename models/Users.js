const mongoose = require("mongoose");

//Define Schema==================================
var usersSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  profile: {
    name: String,
    gender: String,
    location: String,
    website: String,
    picture: String
  }
});

//Create model===================================
//var usersSchema = connection.model('Users', usersSchema);


//module.exports = usersSchema;
