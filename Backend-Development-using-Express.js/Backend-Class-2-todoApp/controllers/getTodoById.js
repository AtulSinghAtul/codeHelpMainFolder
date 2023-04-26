// import todo schema
const Todo = require("../models/Todo");

//define route handler
exports.getTodoById = async (req, res) => {
  try {
    // extract todo item basis on id
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });

    // data forgiven id not found
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: `no data found woth given id`,
      });
    }
    // data for given id found
    res.status(200).json({
      success: true,
      data: todo,
      message: `Todo ${id} data successfully fetched`,
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
