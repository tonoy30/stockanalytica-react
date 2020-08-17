import React from 'react'
import { useDispatch } from "react-redux"
import { defaultAction } from '../../actions/default.action'

const Home = () => {
	const dispatch = useDispatch()
	return (
		<div>
			Home
			<button onClick={() => dispatch(defaultAction())}>Dispatch</button>
		</div>
	)
}

export default Home
