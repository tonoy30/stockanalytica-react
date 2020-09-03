import React from 'react'
import { useDispatch } from "react-redux"
import { defaultAction } from '../../actions/default.action'
import "./Home.scss"

const Home = () => {
	const dispatch = useDispatch()
	return (
		<div className="home">
			<div>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, dignissimos.
			</div>
			<button onClick={() => dispatch(defaultAction())}>Dispatch</button>
		</div>
	)
}

export default Home
