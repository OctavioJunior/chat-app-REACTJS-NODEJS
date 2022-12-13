const UsersModel = require("../models/usersModel");

class UsersController {
  constructor() {
    this.createUser = async (req, res) => {
      try {
        const { username, email, password } = req.body;
        if (await UsersModel.findOne({ email })) {
          console.log("User already exist!");
        }

        const newUser = await UsersModel.create({ username, email, password });
        res.json(newUser);
      } catch (error) {
        res.json(error);
      }
    };
  }
}
module.exports = new UsersController();
