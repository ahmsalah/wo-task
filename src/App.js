import React from 'react';
import theme from './components/styled/theme';
import GlobalStyle from './components/styled/global';
import Routes from './Routes';
import { ThemeProvider } from 'styled-components';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Routes />
			</ThemeProvider>
		</Provider>
	);
}

export default App;
