import styled from 'styled-components';

const Button = styled.button`
	background-color: ${props =>
		props.secondary
			? props.theme.palette.background.secondary
			: props.theme.palette.background.primary};
	color: ${props =>
		props.secondary ? props.theme.palette.text.secondary : props.theme.palette.text.primary};
	border: 2px solid ${props => props.theme.palette.border};
	padding: 1.5rem 5rem;
	text-transform: uppercase;
	font-size: 10px;
	cursor: pointer;

	@media ${props => props.theme.breakpoints.mobileM} {
		padding: 1.5rem 3rem;
	}
`;

export default Button;
