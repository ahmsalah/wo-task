import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import PhotoItem from './pages/PhotoItem';
import Categories from './pages/Categories';

function Routes() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/categories">
					<Categories />
				</Route>
				<Route path="/:slug">
					<PhotoItem />
				</Route>
			</Switch>
		</Router>
	);
}

export default Routes;
