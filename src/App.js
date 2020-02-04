import React from 'react';
import theme from './components/styled/theme';
import GlobalStyle from './components/styled/global';
import { ThemeProvider } from 'styled-components';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
		</ThemeProvider>
	);
}

export default App;
