import React, { Fragment } from 'react'
import Header from '../header/Header'
import Footer from '../footer/FooterContainer'

const Layout = (props: any) => {
	return (
		<Fragment>
			<Header />
			<div className="content">
				{props.children}
			</div>
			<Footer />
		</Fragment >
	)
}

export default Layout
