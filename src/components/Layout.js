import React, { Fragment } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollUp from './ScrollUp';

function Layout({ children }) {
	return (
		<Fragment>
			<Navbar />
			<ScrollUp />
			{children}
			<Footer />
		</Fragment>
	);
}

export default Layout;
