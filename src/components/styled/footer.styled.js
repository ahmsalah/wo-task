import styled from 'styled-components';
import theme from './theme';

export const Root = styled.div`
	background-color: ${props => props.theme.palette.background.primary};
	color: ${props => props.theme.palette.text.primary};
	font-size: 10px;
	padding: 1rem 0 .6rem;

	.container {
		display: flex;
		@media ${theme.breakpoints.tablet} {
			flex-direction: column;
		}
	}
`;

const FooterCol = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding: .5rem 1.5rem;
	@media ${theme.breakpoints.tablet} {
		align-items: center;
	}
`;

export const FooterColLeft = styled(FooterCol)`
flex: 1;

  h1 {
    font-size: 20px;
    margin-bottom: 1rem;
  }

  .social-media a {
    font-size: 15px;
    margin-right: 5px;
    letter-spacing: 3px;
    color: white;
  }
`;

export const FooterColCenter = styled(FooterCol)`
flex: 1;
align-items: center;
div span {
  cursor: pointer;
  color: #337ab7;
}
`;

export const FooterColRight = styled(FooterCol)`
flex: 1;
align-items: flex-end;

div {
  margin-right: 100px;
  cursor: pointer;

  @media ${theme.breakpoints.tablet} {
    margin-right: 0;			
  }
}

.terms {
  padding-bottom: 6px;
}
`;
