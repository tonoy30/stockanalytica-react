import React from 'react'

const Test = (props: any) => {
	return (
		<div>
			Testing
			{console.log(props.match)}
		</div>
	)
}

export default Test
