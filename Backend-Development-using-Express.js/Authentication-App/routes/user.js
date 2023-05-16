const express = require("express");
const router = express.Router();
const { auth, isStudent, isAdmin } = require("../Middlwares/auth");

const { login, signUp } = require("../Controllers/Auth");
const { User } = require("../models/User");

router.post("/login", login);
router.post("/signUp", signUp);

//! testing protected route for single middleware
router.get("/test", auth, (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Welcome to the testing ruote",
  });
});
//* protected routes using middleware
router.get("/student", auth, isStudent, (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Welcome to the protected route for Student",
  });
});

router.get("/admin", auth, isAdmin, (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Welcome to the protected route for Admin",
  });
});

// how find whole user data by id from payload
router.get("/getEmail", auth, async (req, res) => {
  try {
    const id = req.user.id;
    const user = await User.findById({ id });
    res.status(200).json({
      success: true,
      user: user,
      message: "mail route",
    });
  } catch (error) {
    return res.status(200).json({
      success: false,
      error: error.message,
      message: "fatt gya",
    });
  }
});
module.exports = router;
