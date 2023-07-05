const express = require("express");

const router = express.Router();

const {
  localFileUpload,
  imageUpload,
  videoUpload,
  imageSizeReducer,
} = require("../controllers/fileUpload");

//! api route
router.use("/localFileUpload", localFileUpload);
router.use("/imageUpload", imageUpload);
router.use("/videoUpload", videoUpload);
router.use("/imageSizeReducer", imageSizeReducer);

module.exports = router;
