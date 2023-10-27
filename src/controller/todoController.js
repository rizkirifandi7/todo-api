const TodoServices = require("../services/todoService");

class TodoController {
	static async healthCheck(req, res) {
		res.status(200).json({ message: "Hello World" });
	}

	static async listTodos(req, res) {
		try {
			const todos = await TodoServices.listTodos();
			res.status(200).json({data : todos});
		} catch (error) {
			res.status(500).json({ error: "Internal Server Error" });
		}
	}

	static async getTodoById(req, res) {
		const id = req.params.id;
		try {
			const todo = await TodoServices.getTodoById(id);
			if (!todo) {
				res.status(404).json({ message: "Todo not found" });
			} else {
				res.status(200).json({
					message: `Successfully got Todo with ID ${id}`,
					data: todo,
				});
			}
		} catch (error) {
			res.status(500).json({ error: "Internal Server Error" });
		}
	}

	static async createTodo(req, res) {
		const { title } = req.body;
		try {
			if (!title) {
				return response.status(400).json({ message: "Complete all attributes!" });
			}
			const todoData = { title };
			const todo = await TodoServices.createTodo(todoData);
			if (!todo) {
				res.status(404).json({ message: "Failed to create Todo" });
			} else {
				res.status(200).json({
					message: `Successfully create Todo`,
					data: todo,
				});
			}
		} catch (error) {
			res.status(500).json({ error: "Internal Server Error" });
		}
	}

	static async updateTodo(req, res) {
		const { id } = req.params;
		const { title } = req.body;
		try {
			const todoData = await TodoServices.updateTodo(id, title);
			return res.status(200).json({
				message: `Todo Updated Successfully at ID: ${id}`,
				data: todoData,
			});
		} catch (err) {
			console.error(err);
			return res.status(500).json({
				message: `Todo Updated Failed at ID: ${id}`,
			});
		}
	}

	static async deleteTodo(req, res) {
		const id = req.params.id;
		try {
			const todo = await TodoServices.deleteTodo(id);
			if (!todo) {
				return res.status(404).json({
					message: "Todo Not Found",
				});
			} else {
				return res.status(200).json({
					message: `Todo Deleted Successfully at ID: ${id}`,
				});
			}
		} catch (err) {
			console.error(err);
			return res.status(500).json({
				message: `Todo Deleted Failed at ID: ${id}`,
			});
		}
	}
}

module.exports = TodoController;
