const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 3,
    max: 24,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    max: 64,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },
});

const UsersModel = mongoose.model("Users", UsersSchema);

module.exports = UsersModel;
