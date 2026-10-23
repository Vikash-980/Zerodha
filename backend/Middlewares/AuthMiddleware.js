const User = require("../model/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ status: false });
  }
  try {
    const data = jwt.verify(token, process.env.TOKEN_KEY);
    const user = await User.findById(data.id);
    if (!user) {
      return res.status(401).json({ status: false });
    }
    return res.json({ status: true, user: user.username });
  } catch (error) {
    if (error.name === "JsonWebTokenError" || error.name === "TokenExpiredError") {
      return res.status(401).json({ status: false });
    }
    return next(error);
  }
};