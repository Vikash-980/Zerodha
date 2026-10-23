const { Signup, Login } = require('../Controllers/AuthController')
const {userVerification} = require('../Middlewares/AuthMiddleware');
const router = require('express').Router()

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    secure: process.env.NODE_ENV === "production",
  });
  res.json({ success: true });
});
router.post("/", userVerification);

module.exports = router