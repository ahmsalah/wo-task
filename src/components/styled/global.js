import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	${reset}
	html {
		font-size: 62.5%;
	}
	body {
		font-family: 'Lato', sans-serif;
		font-size: 1.4rem;
		line-height: 1.4;
		color: ${props => props.theme.palette.text.secondary};
	}
	a {
		color: #337ab7;
    text-decoration: none;
	}
	a:hover, a:active {
		color: #23527c;
    text-decoration: none;
	}
`;

export default GlobalStyle;
