import React, { Fragment } from 'react';
import Footer from '../footer/FooterContainer';
import Header from '../header/Header';

const Layout = (props: any) => {
	return (
		<Fragment>
			<Header />
			{props.children}
			<Footer />
		</Fragment>
	);
};

export default Layout;
