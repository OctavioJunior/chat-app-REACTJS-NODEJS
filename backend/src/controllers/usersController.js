const UsersModel = require("../models/usersModel");
const bcrypt = require("bcrypt");

class UsersController {
  constructor() {
    this.createUser = async (req, res) => {
      try {
        console.log(req.body);
        const { username, email, password } = req.body;
        if (await UsersModel.findOne({ email })) {
          console.log("User already exist!");
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await UsersModel.create({ username, email, password });
        delete newUser.password;
        res.json(newUser);
      } catch (error) {
        res.json(error);
      }
    };
  }
}
module.exports = new UsersController();
