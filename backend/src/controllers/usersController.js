const UsersModel = require("../models/usersModel");
const bcrypt = require("bcrypt");

class UsersController {
  constructor() {
    this.registerUser = async (req, res) => {
      try {
        console.log(req.body);
        const { username, email, password } = req.body;
        const emailExist = await UsersModel.findOne({ email });
        if (emailExist) {
          return res.json({ msg: "Email already exist!", status: false });
        }
        const usernameExist = await UsersModel.findOne({ username });
        if (usernameExist) {
          return res.json({ msg: "Username already exist!", status: false });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await UsersModel.create({
          username,
          email,
          password: hashedPassword,
        });
        delete newUser.password;
        return res.json({ newUser, status: true });
      } catch (error) {
        return res.json(error);
      }
    };

    this.loginUser = async (req, res) => {
      try {
        console.log(req.body);
        const { username, password } = req.body;
        const user = await UsersModel.findOne({ username });
        if (!user) {
          return res.json({
            msg: "Username or password incorrect, verify upper or lowercase!",
            status: false,
          });
        }
        const passwordValid = await bcrypt.compare(password, user.password);
        if (!passwordValid) {
          return res.json({
            msg: "Username or password incorrect, verify upper or lowercase!",
            status: false,
          });
        }
        delete user.password;
        return res.json({ user, status: true });
      } catch (error) {
        return res.json(error);
      }
    };
  }
}
module.exports = new UsersController();
