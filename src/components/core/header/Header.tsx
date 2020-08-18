import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.scss"
const Header = () => {
	return (
		<div className="header">
			<p>
				Header
			</p>
			<ul>
				<li>
					<Link to="/" replace>Home</Link>
				</li>
				<li>
					<Link to="/test" replace>Test</Link>
				</li>
			</ul>
		</div>
	)
}

export default Header
