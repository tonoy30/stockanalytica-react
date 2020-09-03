import React from 'react'
import "./Footer.scss"
interface IProps {
	children: any;
	[rest: string]: any
}

export const Footer = (props: IProps) => {
	return (
		<footer className="container" {...props.rest}>
			{props.children}
		</footer>
	)
}
Footer.Wrapper = (props: IProps) => {
	return (
		<div className="wrapper" {...props.rest}>
			{props.children}
		</div>
	)
}
Footer.Row = (props: IProps) => {
	return (
		<div className="row" {...props.rest}>
			{props.children}
		</div>
	)
}
Footer.Column = (props: IProps) => {
	return (
		<div className="column" {...props.rest}>
			{props.children}
		</div>
	)
}
Footer.Link = (props: IProps) => {
	return (
		<a className="link" {...props.rest}>
			{props.children}
		</a>
	)
}
Footer.Title = (props: IProps) => {
	return (
		<p className="title" {...props.rest}>
			{props.children}
		</p>
	)
}
