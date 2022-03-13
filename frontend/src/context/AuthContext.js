import React, { createContext, useState, useEffect } from 'react';

import api from '../api';
import history from '../history';

const Context = createContext();

function setApiToken(token) {
	api.defaults.headers.Authorization = `Bearer ${token}`;
}

function AuthProvider({ children }) {

	const [authenticated, setAuthenticated] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const token = localStorage.getItem('token');

		if(token) {
			setApiToken(JSON.parse(token));
			setAuthenticated(true);
		}

		setLoading(false);
	}, []);

	async function handleLogin(data) {
		const {data:{token}} = await api.post('/login', data);

		setAuthenticated(true);
		localStorage.setItem('token', JSON.stringify(token));
		setApiToken(token);
		history.push('/');
	}

	async function handleLogout() {
		setAuthenticated(false);
		localStorage.removeItem('token');
		api.defaults.headers.Authorization = undefined;
		history.push('/user/login');
	}

	if(loading) {
		return null; // TODO: Retornar componente de loading.
	}

	return (
		<Context.Provider value={{ authenticated, handleLogin, handleLogout }}>
			{children}
		</Context.Provider>
	);
}

export { Context, AuthProvider };
