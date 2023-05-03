const express = require("express");
const router = express.Router();

//import controller
const { dummyController } = require("../controllers/dummyController");
const { createComment } = require("../controllers/commentController");

//mapping create
router.get("/dummypage", dummyController);
router.post("/comments/create", createComment);
//export
module.exports = router;
