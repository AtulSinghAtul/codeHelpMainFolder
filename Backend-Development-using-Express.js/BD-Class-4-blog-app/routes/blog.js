const express = require("express");
const router = express.Router();

//import controller
const { dummyController } = require("../controllers/dummyController");
const { createComment } = require("../controllers/commentController");
const { createPost, getAllPosts } = require("../controllers/postController");
const { likePost } = require("../controllers/likeController");

//mapping create
router.get("/dummypage", dummyController);
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/allposts", getAllPosts);
router.post("/likes/like", likePost);
//export
module.exports = router;
