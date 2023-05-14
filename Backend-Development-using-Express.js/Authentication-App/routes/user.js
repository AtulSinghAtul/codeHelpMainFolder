const express = require("express");
const router = express.Router();
const { auth, isStudent, isAdmin } = require("../Middlwares/auth");

const { login, signUp } = require("../Controllers/Auth");

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

module.exports = router;
