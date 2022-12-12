const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set({ strictQuery: false });

const connection = async () => {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connected at database!");
    })
    .catch((err) => {
      console.log(err);
    });
};

connection();

module.exports = connection;
