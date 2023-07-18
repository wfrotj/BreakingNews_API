import User from "../models/User.js";
import bcrypt from "bcrypt";

const getUsers = async (req, res, next) => {
  const users = await User.find({});
  res.status(200).json(users);
};

const createUser = async (req, res, next) => {
  try {
    const { email, username, password } = req.body;
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user = new User({
      username,
      passwordHash,
      email,
    });

    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.log(error);
  }
};

export default {
  createUser,
  getUsers,
};
