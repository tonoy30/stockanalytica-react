import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import Layout from './components/core/layout/Layout';
import Home from './components/home/Home';
import Test from './components/test/Test';

const App = () => {
	return (
		<HashRouter>
			<Layout>
				<Switch>
					<Route exact={true} path="/home" component={Home} />
					<Route path="/test" component={Test} />
				</Switch>
			</Layout>
		</HashRouter>
	);
}

export default App;
