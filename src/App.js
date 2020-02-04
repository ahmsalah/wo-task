import React from 'react';
import theme from './components/styled/theme';
import GlobalStyle from './components/styled/global';
import Routes from './Routes';
import { ThemeProvider } from 'styled-components';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Routes />
		</ThemeProvider>
	);
}

export default App;
