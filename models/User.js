import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  passwordHash: String,
});

userSchema.plugin(uniqueValidator);

const User = mongoose.model("User", userSchema);

export default User;
