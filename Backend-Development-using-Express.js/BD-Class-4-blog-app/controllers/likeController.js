const Post = require("../models/postModel");
const Like = require("../models/likeModel");

exports.likePost = async (req, res) => {
  try {
    const { post, user } = req.body;

    const likeObject = new Like({
      post,
      user,
    });

    const savedLike = likeObject.save();

    const updatedPost = Post.findByIdAndUpdate(
      post,
      {
        $push: { like: savedLike._id },
      },
      { new: true }
    )
      .populate("like")
      .exec();
    res.json({
      post: updatedPost,
    });
  } catch (error) {
    return res.status(500).json({
      err: "error like",
    });
  }
};
