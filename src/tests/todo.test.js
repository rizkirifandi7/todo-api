const app = require("../../app");
const request = require("supertest");

describe("Todo Unit Test", () => {
	test("Add Todo Successfully", (done) => {
		const newTodo = {
			title: "Todo 5",
		};

		request(app)
			.post("/api/todos/add")
			.send(newTodo)
			.expect("Content-Type", /json/)
			.expect(200)
			.then((response) => {
				expect(response.body.message).toBe("Successfully create Todo");
				done();
			})
			.catch(done);
	});

	test("Get all list", (done) => {
		request(app)
			.get("/api/todos/all")
			.expect("Content-Type", /json/)
			.expect(200)
			.then((response) => {
				expect(Array.isArray(response.body)).toBe(true);
				done();
			})
			.catch(done);
	});

	let id;

	test("Get Detail Todo", (done) => {
		request(app)
			.get("/api/todos/4")
			.expect("Content-Type", /json/)
			.expect(200)
			.then((response) => {
				expect(response.body.message).toBe("Successfully got Todo with ID 4");
				expect(response.body.data.id).toBe(4);
				id = response.body.data.id;
				done();
			})
			.catch(done);
	});

	test("Edit Todo", (done) => {
		const updatedTodo = {
			title: "Todo Yes",
		};

		request(app)
			.put(`/api/todos/edit/${id}`)
			.send(updatedTodo)
			.expect("Content-Type", /json/)
			.expect(200)
			.then((response) => {
				expect(response.body.message).toBe(`Todo Updated Successfully at ID: ${id}`);
				expect(response.body.data.title).toBe("Todo Yes");
				done();
			})
			.catch(done);
	});

	test("Delete Todo", (done) => {
		request(app)
			.delete(`/api/todos/delete/${id}`)
			.expect("Content-Type", /json/)
			.expect(200)
			.then((response) => {
				expect(response.body.message).toBe(`Todo Deleted Successfully at ID: ${id}`);
				done();
			})
			.catch(done);
	});
});
