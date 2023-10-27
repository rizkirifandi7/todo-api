const express = require("express");
const TodoController = require("../controller/todoController");
const router = express.Router();

router.get("/check", TodoController.healthCheck);
router.get("/all", TodoController.listTodos);
router.get("/:id", TodoController.getTodoById);
router.post("/add", TodoController.createTodo);
router.put("/edit/:id", TodoController.updateTodo);
router.delete("/delete/:id", TodoController.deleteTodo);

module.exports = router;
