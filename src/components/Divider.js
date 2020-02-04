import styled from 'styled-components';

const Divider = styled.hr`
	border: none;
	height: 1px;
	margin: 0;
	flex-shrink: 0;
	background-color: ${props => props.theme.palette.divider};
`;

export default Divider;
