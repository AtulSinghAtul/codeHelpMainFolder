const express = require("express");
const User = require("../models/User");

//* signup route handler
exports.signUp = async (req, res) => {
  //* get data
  const { name, email, password, role } = req.body;

  //* check if user already exist
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    res.status(400).json({
      successs: false,
      message: "User already exist",
    });
  }

  //* secure password
  let hashedPassword;
  let saltRound = 10;

  try {
    hashedPassword = await bcrypt.hash(password, saltRound);
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "error in hashing password",
    });
  }
};

//* login route handler
exports.login = async (req, res) => {};
