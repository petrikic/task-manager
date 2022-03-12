'use strict';

const Board = use('App/Models/Board');

class BoardController {
	async createBoard({ request, auth }) {
		const { id } = await auth.getUser();
		const data = request.only(['name']);
		data.user_id = id;

		return Board.create(data);
	}

	async getBoards({ request, auth }) {
		const { id } = await auth.getUser();
		const page = request.input('page', 1);
		const limit = request.input('limit', 10);

		return await Board.query().where('user_id', id).paginate(page, limit);
	}
}

module.exports = BoardController;
