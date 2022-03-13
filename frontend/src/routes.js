import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/User/Login';
import Register from './pages/User/Register';
import Home from './pages/Home';

import { Context } from './context/AuthContext';

function CustomRoute({ isPrivate, ...rest }) {
	const { authenticated } = useContext(Context);

	if (isPrivate && !authenticated) {
		return <Redirect to="/user/login" />;
	}

	return <Route {...rest} />;
}

export default function Routes() {
	return (
		<Switch>
			<CustomRoute exact path="/user/login" component={Login} />
			<CustomRoute exact path="/user/register" component={Register} />
			<CustomRoute isPrivate exact path="/" component={Home} />
		</Switch>
	);
}
