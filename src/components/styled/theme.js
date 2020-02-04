const theme = {
	palette: {
		text: {
			main: '#333',
			sub: '#626061',
			primary: '#fff',
			secondary: '#000'
		},
		background: {
			primary: '#000',
			secondary: '#fff',
			light: 'rgb(235, 235, 235)'
		},
		common: {
			black: '#000',
			white: '#fff'
		},
		border: '#000',
		divider: 'rgba(0, 0, 0, 1)'
	},
	breakpoints: {
		mobileS: `(max-width: 320px)`,
		mobileM: `(max-width: 375px)`,
		mobileL: `(max-width: 425px)`,
		tablet: `(max-width: 768px)`,
		laptop: `(max-width: 1200px)`,
		desktop: `(max-width: 2560px)`
	}
};

export default theme;
