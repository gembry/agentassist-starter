const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true },
    password: String,
    passwordResetToken: String,
    passwordResetExpires: Date,
    facebook: String,
    twitter: String,
    google: String,
    github: String,
    instagram: String,
    linkedin: String,
    steam: String,
    tokens: Array,
    profile: {
      name: String,
      gender: String,
      location: String,
      website: String,
      picture: String
    }
  },
  { timestamps: true }
);

var Users = mongoose.model("Users", usersSchema);

module.exports = Users;
