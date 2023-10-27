// services/todoService.js
const TodoRepository = require("../repositories/todoRepository");

class TodoServices {
	static async listTodos() {
		return await TodoRepository.listTodos();
	}

	static async getTodoById(id) {
		return await TodoRepository.getTodo(id);
	}

	static async createTodo(title) {
		return await TodoRepository.createTodo(title);
	}

	static async updateTodo(id, newTitle) {
		return await TodoRepository.updateTodo(id, newTitle);
	}

	static async deleteTodo(id) {
		return await TodoRepository.deleteTodo(id);
	}
}

module.exports = TodoServices;
