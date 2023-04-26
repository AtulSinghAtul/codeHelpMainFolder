// import todo schema
const Todo = require("../models/Todo");

//define route handler
exports.getTodo = async (req, res) => {
  try {
    // using find function get all todo items from database
    const todos = await Todo.find({});

    // send a json response with a success flag
    res.status(200).json({
      success: true,
      data: todos,
      message: "Entire todo data is fetched",
    });
  } catch (err) {
    console.log(err);
    console.error(err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};
