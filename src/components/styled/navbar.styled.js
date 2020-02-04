import styled from 'styled-components';
import theme from './theme';

const fixed = {
	transition: 'all ease 1s',
	position: 'sticky',
	top: 0,
	minWidth: '100%',
	backgroundColor: '#fff',
	justifyContent: 'flex-start',
	alignItems: 'center',
	zIndex: 9999
};

export const Root = styled.div`
	width: 100%;
	top: 0;
	position: ${props => (props.scrolled ? 'sticky' : 'relative')};
	padding-top: ${props => (props.scrolled ? 0 : '3rem')};
	z-index: 9998;
	@media ${theme.breakpoints.tablet} {
		padding: 0;
	}

	.container {
		transition: all ease 0.1s;
		width: 92%;
		max-width: 1100px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: sticky;
		left: 0;
		right: 0;
		margin: auto;
		${props => props.scrolled && fixed};
	}
`;

export const Items = styled.div`
	padding: ${props => !props.scrolled && '0 1rem'};
	width: ${props => !props.scrolled && '43%'};
	display: flex;
	align-self: flex-end;
	align-items: center;
	border-top: ${props => !props.scrolled && `solid 1px ${props.theme.palette.border}`};
	border-bottom: ${props => !props.scrolled && `solid 1px ${props.theme.palette.border}`};
	order: ${props => props.scrolled && 1};

	@media ${theme.breakpoints.tablet} {
		display: none;
	}

	&.items--left {
		justify-content: ${props => (props.scrolled ? 'flex-end' : 'space-between')};
	}

	&.items--right {
		justify-content: ${props => (props.scrolled ? 'flex-start' : 'space-between')};
	}
`;

export const Logo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 10%;
	text-align: center;
	justify-content: ${props => (props.scrolled ? 'center' : 'flex-end')};
	order: ${props => props.scrolled && 0};
	padding: 0 1rem;

	@media ${theme.breakpoints.tablet} {
		margin: 0 auto;
		order: 2;
	}

	img {
		max-height: ${props => (props.scrolled ? '40px' : '78px')};
		min-width: 55px;
		display: block;
		max-width: 100%;
		height: auto;
	}
`;

export const UserControls = styled.div`
	order: 3;
	position: ${props => (props.scrolled ? 'relative' : 'absolute')};
	top: ${props => (props.scrolled ? 'unset' : 0)};
	display: flex;
	justify-content: flex-start;
	padding-left: 2rem;
	padding-top: 0;
	font-weight: 900;
	cursor: pointer;

	@media ${theme.breakpoints.tablet} {
		position: relative;
		order: 1;
		top: unset;
	}
`;

export const MenuButton = styled.div`
	z-index: 200;
	position: relative;
	order: 3;
	padding: 2rem;
	margin-right: 1.2rem;
	display: none;
	@media ${theme.breakpoints.tablet} {
		display: block;
	}
	span,
	span::before,
	span::after {
		position: absolute;
		background-color: #000;
		height: 2px;
		width: 2.2rem;
		content: "";
	}

	span::before {
		margin-top: -.6rem;
	}
	span::after {
		margin-top: .6rem;
	}
`;
