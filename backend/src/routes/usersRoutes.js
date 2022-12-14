const UsersController = require("../controllers/usersController");

const { Router } = require("express");
const router = new Router();

router.post("/register", UsersController.createUser);

module.exports = router;
