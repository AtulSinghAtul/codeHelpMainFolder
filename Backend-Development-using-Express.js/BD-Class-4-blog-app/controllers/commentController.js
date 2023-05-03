// import model
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

//business logic
exports.createComment = async (req, res) => {
  try {
    // fetch data from req body
    const { post, body, user } = req.body;

    //create a comment object

    const comment = new Comment({
      post,
      body,
      user,
    });

    // save the new comment in db using mongoose save() function
    const saveComment = await comment.save();

    // find the post by id, add the new comment to its comments array
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { comments: saveComment._id } },
      { new: true }
    )
      .populate("comments")
      .exec(); // populate the comments array with comment document
  } catch (error) {
    return res.status(500).json({
      error: "Error while creating comments",
    });
  }
};
