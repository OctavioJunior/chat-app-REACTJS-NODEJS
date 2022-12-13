const UsersController = require("../controllers/usersController");

const { Router } = require("express");
const router = new Router();

router.post("/", UsersController.createUser);

module.exports = router;
