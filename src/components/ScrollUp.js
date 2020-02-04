import React, { useState, memo } from 'react';
import styled from 'styled-components';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

const Root = styled.a`
	cursor: pointer;
	position: fixed;
	right: 20px;
	bottom: 20px;
	height: 50px;
	width: 50px;
	background-color: white;
	box-shadow: 0 0 2px 0;
	z-index: 99999;
	border-radius: 50%;
	opacity: ${props => (props.scrolled ? 1 : 0)};
	visibility: ${props => (props.scrolled ? 'visible' : 'hidden')};
	transition: opacity ease 1s;
	i {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`;

function ScrollUp() {
	const [ scrolled, setScrolled ] = useState(false);

	useScrollPosition(
		({ currPos }) => {
			currPos.y < -120 ? setScrolled(true) : setScrolled(false);
		},
		[ scrolled ]
	);
	return (
		<Root onClick={() => window.scroll({ top: 0, behavior: 'smooth' })} scrolled={scrolled}>
			<i className="fas fa-chevron-up" />
		</Root>
	);
}

export default memo(ScrollUp);
