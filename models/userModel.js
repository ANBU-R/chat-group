import mongoose from "mongoose";
import validator from "validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    validate: {
      validator: validator.isEmail,
      message: "value is not a valid email",
    },
  },
  image: {
    type: String,
    default: "default.jpg",
  },
  password: {
    type: String,
    minLength: 8,
    required: [true, "Password is required"],
  },
  channels: {
    type: [mongoose.Types.ObjectId],
    ref: "Channel",
  },
});
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
});
userSchema.methods.createJWT = function () {
  return jwt.sign({ userID: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};
userSchema.methods.comparePasswords = async function (password) {
  return await bcrypt.compare(password, this.password);
};
export default mongoose.model("User", userSchema);
