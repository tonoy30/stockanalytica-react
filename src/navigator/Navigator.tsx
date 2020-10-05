import React, { FC } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from '../components/core/layout/Layout';
import Home from '../components/home/Home';
import Test from '../components/test/Test';
type Props = {};

const Navigator: FC<Props> = () => {
	return (
		<Router>
			<Layout>
				<Switch>
					<Route exact={true} path='/home' component={Home} />
					<Route path='/test' component={Test} />
				</Switch>
			</Layout>
		</Router>
	);
};
export { Navigator };
