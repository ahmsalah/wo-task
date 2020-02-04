import React, { memo } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import theme from './styled/theme';
import { Link } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
	body {
		overflow: ${props => (props.open ? 'hidden' : 'unset')}
	}
`;

const Root = styled.div`
	display: none;
	@media ${theme.breakpoints.tablet} {
		display: block;
	}
`;

const Background = styled.div`
	border-radius: 50%;
	position: absolute;
	background-color: #fff;
	z-index: 100;
	transition: transform .8s cubic-bezier(0.86, 0, 0.07, 1);
	height: 5rem;
	width: 5rem;
	top: 3.5rem;
	right: 3.0rem;
	transform: ${props => (props.open ? 'scale(80)' : 'none')};
`;

const Nav = styled.nav`
	height: 100vh;
	width: 100%;
	position: fixed;
	top: 0;
	right: 0;
	z-index: 150;

	opacity: ${props => (props.open ? 1 : 0)};
	visibility: ${props => (props.open ? 'visible' : 'hidden')};
	transition: all .8s cubic-bezier(0.68, -0.55, 0.265, 1.55);

	.list {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		list-style: none;
		text-align: center;
		width: 100%;
	}

	.nav-item {
		margin: 1rem;
		padding: 2rem 3rem;
	}

	.nav-link {
		display: inline-block;
		position: relative;
		font-size: 2rem;
		font-weight: 900;
		text-transform: uppercase;
		color: #000;
		text-decoration: none;
		transition: color .2s ease-in-out .05s;
		line-height: 100%;
	}
`;

const data = [
	{ title: 'Gallery', link: '' },
	{ title: '360 planned', link: '' },
	{ title: 'For The Wedding', link: '' },
	{ title: 'Him', link: '' },
	{ title: 'Her', link: '' }
];

function Navigation({ open, setOpen }) {
	return (
		<Root onClick={() => setOpen(false)}>
			<GlobalStyle open={open} />
			<Background open={open}>&nbsp;</Background>
			<Nav open={open} className="navigation__nav">
				<ul className="list">
					{data.map(item => (
						<li onClick={() => setOpen(false)} key={item.title} className="nav-item">
							<Link to={item.link} className="nav-link">
								{item.title}
							</Link>
						</li>
					))}
				</ul>
			</Nav>
		</Root>
	);
}

export default memo(Navigation);
