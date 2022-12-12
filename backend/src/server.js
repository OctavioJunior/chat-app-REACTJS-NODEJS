const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
require("./database/dbConnection");

const server = express();

server.use(cors());
server.use(express.json());

server.listen(process.env.PORT, () => {
  console.log(`Sercer running at http://localhost:${process.env.PORT}`);
});
