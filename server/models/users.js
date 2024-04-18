import mongoose from "mongoose";
import Collections from "../database/collections.js";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  salt: String,
});

const UserModel = mongoose.model(Collections.USERS, userSchema);

export default UserModel;
