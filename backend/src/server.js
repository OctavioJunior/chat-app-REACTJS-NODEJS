const express = require("express");
const cors = require("cors");
const usersRoutes = require("./routes/usersRoutes");
require("dotenv").config();
require("./database/dbConnection");

const server = express();

server.use(cors());
server.use(express.json());

server.use("/", usersRoutes);

server.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`);
});
