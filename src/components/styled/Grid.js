import styled from 'styled-components';

const Grid = styled.div`
	padding: 3rem 9rem;
	max-width: 1000px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
	grid-gap: 3rem;
	align-items: start;
	@media ${props => props.theme.breakpoints.tablet} {
		padding: 3rem;
		grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
		grid-column-gap: 6rem;
	}
`;

export default Grid;
