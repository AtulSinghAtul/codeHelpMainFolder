const jwt = require("jsonwebtoken");
const { login } = require("../Controllers/Auth");
require("dotenv").config();

//^ authentication middleware
exports.auth = (req, res, next) => {
  try {
    //* extract JWT token
    //! PENDING: other ways to fetch token
    console.log("body", req.body.token);
    console.log("cookies", req.cookies.token);
    // console.log("header", req.header("Authorization").replace("Bearer ", ""));

    const { token } = req.body;

    console.log(token);
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "missing token",
      });
    }

    //* verify the token
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      console.log(payload);
      //* store decode object (payload) inside request user
      //! why this ?
      req.user = payload;
    } catch (err) {
      return res.status(401).json({
        success: false,
        message: "token is invalid",
        error: err.message,
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "something went wrong while verifying the token",
      error: error.message,
    });
  }
};

//^ isStudent authorization middleware
exports.isStudent = (req, res, next) => {
  try {
    // yah role hame payload se mila hai jo hamne decode kiya hai
    if (req.user.role !== "Student") {
      return res.status(401).json({
        success: false,
        message: "This is a protected route for Students",
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "User role is not matching",
    });
  }
};

//^ isAdmin authorization middleware
exports.isAdmin = (req, res, next) => {
  try {
    // yah role hame payload se mila hai jo hamne decode kiya hai
    if (req.user.role !== "Admin") {
      return res.status(401).json({
        success: false,
        message: "This is a protected route for Admin",
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "User role is not matching",
    });
  }
};
