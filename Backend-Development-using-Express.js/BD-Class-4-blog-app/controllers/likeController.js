const Post = require("../models/postModel");
const Like = require("../models/likeModel");

exports.likePost = async (req, res) => {
  try {
    const { post, user } = req.body;

    const likeObject = new Like({
      post,
      user,
    });

    const savedLike = await likeObject.save();

    // update the post collection basis on this
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      {
        $push: { like: savedLike._id },
      },
      { new: true }
    )
      .populate("like")
      .exec();

    console.log(updatedPost);
    res.json({
      post: updatedPost,
    });
  } catch (error) {
    return res.status(500).json({
      err: `Error while liking post ${error.message}`,
    });
  }
};

// Unlike a post
exports.unlikePost = async (req, res) => {
  try {
    const { post, like } = req.body;
    //find and delete the like collection me se
    const deletedLike = await Like.findOneAndDelete({ post: post, _id: like });

    //update the post collection
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      {
        $pull: { like: deletedLike._id },
      },
      { new: true }
    );

    res.json({
      post: updatedPost,
    });
  } catch (error) {
    return res.status(400).json({
      error: "Error while Unliking post",
    });
  }
};
