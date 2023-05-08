const Post = require("../models/postModel");

exports.createPost = async (req, res) => {
  try {
    const { title, body } = req.body;

    // create post object
    const postObject = new Post({
      title,
      body,
    });
    // save post object in db

    const savedPost = await postObject.save();

    res.json({
      post: savedPost,
    });
  } catch (err) {
    return res.status(500).json({
      error: "Error while creating post",
    });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("like").populate("comment");
    res.json({
      posts,
    });
  } catch (err) {
    return res.status(500).json({
      error: "Error while fetching all posts",
    });
  }
};
