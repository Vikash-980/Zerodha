const User = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    const { password } = req.body;
    const email = typeof req.body.email === "string" ? req.body.email.trim().toLowerCase() : "";
    const username = typeof req.body.username === "string" ? req.body.username.trim() : "";
    if (!email || !username || typeof password !== "string" || password.length < 8) {
      return res.status(400).json({ message: "Enter an email, username, and password (at least 8 characters)" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, username });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      secure: process.env.NODE_ENV === "production",
    });
    res
      .status(201)
      .json({
        message: "User signed up successfully",
        success: true,
        user: { id: user._id, email: user.email, username: user.username },
      });
  } catch (error) {
    next(error);
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const email = typeof req.body.email === "string" ? req.body.email.trim().toLowerCase() : "";
    const { password } = req.body;
    if (!email || typeof password !== "string" || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      secure: process.env.NODE_ENV === "production",
    });
    res.status(200).json({ message: "User logged in successfully", success: true });
  } catch (error) {
    next(error);
  }
};