'use strict'

const User = use("App/Models/User");

class UserController {

    async register({request}) {
        const data = request.only(['username', 'password']);
        return await User.create(data);
    }

    async login({ request, response, auth }) {
		const { username, password } = request.all();

		try {
			const userSearch = await auth.validate(username, password, true);
			const {token} = await auth.generate(userSearch, false, {
				//expiresIn: '50m',
			});
			return { username, token };
		} catch (error) {
            //FIXME - melhorar retorno de erro.
			response.status(400).send('Error')
		}
	}

	async logout({ request, auth }) {
		console.log(request);
	}
}

module.exports = UserController
