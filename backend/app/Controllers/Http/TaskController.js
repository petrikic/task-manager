'use strict';

const Task = use('App/Models/Task');

class TaskController {
	async createTask({ request, auth }) {
		const { id } = await auth.getUser();
		const data = request.only(['name', 'content', 'board_id', 'pool_id']);
		data.user_id = id;

		return Task.create(data);
	}

	async getTasks({ request, auth }) {
		const { id } = await auth.getUser();
		const page = request.input('page', 1);
		const limit = request.input('limit', 10);

		const board_id = request.input('board_id', null);
		const pool_id = request.input('pool_id', null);

		return await Task.query()
			.where('user_id', id)
			.where('board_id', board_id)
			.where('pool_id', pool_id)
			.paginate(page, limit);
	}
}

module.exports = TaskController;
