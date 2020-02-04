import React, { Fragment } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollUp from './ScrollUp';
import Features from './Features';

function Layout({ children }) {
	return (
		<Fragment>
			<Navbar />
			<ScrollUp />
			{children}
			<Features />
			<Footer />
		</Fragment>
	);
}

export default Layout;
