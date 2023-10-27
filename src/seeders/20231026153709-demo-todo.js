"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert("Todos", [
			{
				title: "Todo 1",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				title: "Todo 2",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				title: "Todo 3",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.bulkDelete("Todos", null, {});
	},
};

