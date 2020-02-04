import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';

function Routes() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default Routes;
