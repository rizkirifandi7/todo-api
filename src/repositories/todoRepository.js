const { Todo } = require("../models");

class TodoRepository {
	static async listTodos() {
		return await Todo.findAll();
	}

	static async getTodo(id) {
		return await Todo.findByPk(id);
	}

	static async createTodo(title) {
		return await Todo.create(title);
	}

	static async updateTodo(id, newTitle) {
		const todo = await Todo.findByPk(id);
		todo.title = newTitle;
		await todo.save();
		return todo;
	}

	static async deleteTodo(id) {
		const todo = await Todo.findByPk(id);
		if (todo) {
			await todo.destroy();
			return true;
		} else {
			return false;
		}
	}
}

module.exports = TodoRepository;
