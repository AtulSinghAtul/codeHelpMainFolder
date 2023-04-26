const express = require("express");
const router = express.Router();

//import controller
const { createTodo } = require("../controllers/createTodo");
const { getTodo } = require("../controllers/getTodo");
const { getTodoById } = require("../controllers/getTodoById");

//define API routes
router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo);
router.get("/getTodoById/:id", getTodoById);

module.exports = router;
