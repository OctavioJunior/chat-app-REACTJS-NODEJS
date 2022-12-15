const UsersController = require("../controllers/usersController");

const { Router } = require("express");
const router = new Router();

router.post("/register", UsersController.registerUser);
router.post("/login", UsersController.loginUser);

module.exports = router;
