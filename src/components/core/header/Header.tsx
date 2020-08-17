import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<div>
			Header
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
