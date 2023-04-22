// import todo schema
const Todo = require("../models/Todo");

//define route handler
exports.createTodo = async (req, res) => {
  try {
    // extract title and description from request body
    const { title, description } = req.body;

    // create a new todo obj and insert in db
    const response = await Todo.create({ title, description });

    // send a json response with a success flag
    res.status(200).json({
      success: true,
      data: response,
      message: "Entry Created Successfully",
    });
  } catch (err) {
    console.log(err);
    console.error(err);
    res.status(500).json({
      success: true,
      data: "internal server error",
      message: err.message,
    });
  }
};
