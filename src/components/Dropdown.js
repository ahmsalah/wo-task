import React, { memo } from 'react';
import styled from 'styled-components';
import Divider from './Divider';
import theme from './styled/theme';
import { Link } from 'react-router-dom';

const Root = styled.div`
	position: relative;
	display: inline-block;
	color: black;
	background-color: #fff;
	font-weight: 900;
	text-transform: uppercase;

	.dropbtn {
		background-color: transparent;
		border: none;
		padding: ${props => (props.scrolled ? '2.2rem 1.7rem' : '1.5rem .7rem')};
		text-transform: inherit;
		cursor: pointer;
		font-weight: inherit;
		font-family: inherit;
		font-size: 1.4rem;
		outline: none;
		@media ${theme.breakpoints.laptop} {
			font-size: 1rem;
		}
	}

	.dropdown-content {
		display: none;
		position: absolute;
		background-color: inherit;
		min-width: 100%;
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
		z-index: 100;
	}

	.dropdown-content > a {
		font-size: 1.2rem;
		color: inherit;
		font-weight: inherit;
		padding: 1rem 1.5rem;
		text-decoration: none;
		display: block;
		text-align: center;
	}

	&:hover .dropdown-content {
		display: block;
	}
`;

function Dropdown({ item, array, scrolled }) {
	return (
		<Root scrolled={scrolled}>
			<button className="dropbtn">{item}</button>
			<div className="dropdown-content">
				{array.map((val, i) => {
					return (
						<React.Fragment key={i}>
							<Link to={val.link}>{val.title}</Link>
							{i < array.length - 1 && <Divider />}
						</React.Fragment>
					);
				})}
			</div>
		</Root>
	);
}

export default memo(Dropdown);
