import { Box, Flex, Heading, Link } from '@chakra-ui/core';
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import './Header.scss';

const MenuLink = (props: any) => (
	<Link
		// @ts-ignore
		as={RouterLink}
		mt={{ base: 4, md: 0 }}
		mr={6}
		display='block'
		to={props.url}
		color='white'
		className='link'
	>
		{props.children}
	</Link>
);
const Header = (props: any) => {
	const [show, setShow] = useState(false);
	const handleToggle = () => setShow(!show);
	return (
		<Flex
			as='nav'
			align='center'
			justify='space-between'
			wrap='wrap'
			padding='.3rem'
			bg='teal.500'
			color='white'
			background='radial-gradient(circle, #5c27fb 0%, #7047f7 100%)'
			{...props}
		>
			<Flex align='center'>
				<Heading
					as='h1'
					size='lg'
					letterSpacing={'-.1rem'}
					ml={{ sm: 10, md: 85 }}
				>
					Stock Analytica
				</Heading>
			</Flex>
			<Flex justify='center'>
				<Box
					display={{ base: 'block', md: 'none' }}
					onClick={handleToggle}
				>
					<svg
						fill='white'
						width='12px'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<title>Menu</title>
						<path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
					</svg>
				</Box>
				<Box
					display={{ sm: show ? 'block' : 'none', md: 'flex' }}
					width={{ sm: 'full', md: 'auto' }}
					alignItems='center'
					flexGrow={1}
				>
					<MenuLink url='/home'>Home</MenuLink>
					<MenuLink url='/test'>About</MenuLink>
					<MenuLink url='/home'>Services</MenuLink>
					<MenuLink url='/home'>Our Works</MenuLink>
					<MenuLink url='/home'>Pricing</MenuLink>
					<MenuLink url='/home'>Contact</MenuLink>
				</Box>
			</Flex>
		</Flex>
	);
};

export default Header;
