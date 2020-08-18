import React from 'react'
import { Link } from 'react-router-dom'
import { FaReact } from "react-icons/fa"
import "./Header.scss"
//TODO: will be in the separate file
const list = [
	{
		"title": "Home",
		"url": "/home"
	},
	{
		"title": "Services",
		"url": "/services"
	},
	{
		"title": "About",
		"url": "/about"
	},
	{
		"title": "Contact Us",
		"url": "/contact_us"
	}
]
const Header = () => {
	return (
		<div className="header">
			<h1 className="logo">React
				<span>
					<FaReact />
				</span>
			</h1>
			<ul className="menu">
				{list.map((item) => (
					<li key={item.title}>
						<Link to={item.url}>{item.title}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Header
