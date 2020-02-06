import React, { useState, memo } from 'react';
import { Root, Items, Logo, UserControls, MenuButton } from './styled/navbar.styled';
import { Link } from 'react-router-dom';
import logo from '../assets/imgs/logo.png';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import Navigation from './Navigation';
import Dropdown from './Dropdown';

const data = {
	'360 Planner': [
		{ title: 'CHECK LIST', link: '' },
		{ title: 'BUDGETER', link: '' },
		{ title: 'REGISTRY LIST', link: '' },
		{ title: 'GUEST LIST', link: '' },
		{ title: 'WEDDING WEBSITE', link: '' },
		{ title: 'COUPLE WEBSITE', link: '' },
		{ title: 'MORE', link: '' }
	],
	Her: [
		{ title: 'DESIGNERS', link: '' },
		{ title: 'BRIDAL BOUTIQUE', link: '' },
		{ title: 'WEDDING DRESSES', link: '' },
		{ title: 'RINGS', link: '' }
	],
	Him: [
		{ title: 'SUITS', link: '' },
		{ title: 'HEALTH', link: '' },
		{ title: 'FITNESS', link: '' }
	],
	'The Wedding': [
		{ title: 'VENUES', link: '' },
		{ title: 'VIDEOGRAPHERS', link: '' },
		{ title: 'PHOTOGRAPHERS', link: '' }
	],
	Vendors: [ { title: 'CREATE YOUR PROFILE', link: '' } ],
	Gallery: [ { title: 'WEDDING IDEAS', link: '' }, { title: 'MORE', link: '/categories' } ],
	'Ideas & More': [ { title: 'MORE', link: '' } ]
};

function Navbar() {
	const [ scrolled, setScrolled ] = useState(false);
	const [ navOpen, setNavOpen ] = useState(false);

	useScrollPosition(
		({ currPos }) => {
			currPos.y < -120 ? setScrolled(true) : setScrolled(false);
		},
		[ scrolled ]
	);

	return (
		<Root scrolled={scrolled}>
			<div className="container">
				<Items scrolled={scrolled} className="items--left">
					{Object.keys(data)
						.slice(0, 4)
						.map((val, i) => (
							<Dropdown key={i} item={val} array={data[val]} scrolled={scrolled} />
						))}
				</Items>
				<Logo scrolled={scrolled}>
					<Link to="/">
						<img src={logo} alt="logo" />
					</Link>
				</Logo>
				<Items scrolled={scrolled} className="items--right">
					{Object.keys(data)
						.slice(4)
						.map((val, i) => (
							<Dropdown key={i} item={val} array={data[val]} scrolled={scrolled} />
						))}
				</Items>

				<UserControls scrolled={scrolled}>
					<span>EN</span>
				</UserControls>
				<MenuButton onClick={() => setNavOpen(st => !st)}>
					<span />
				</MenuButton>
				<Navigation open={navOpen} setOpen={setNavOpen} />
			</div>
		</Root>
	);
}

export default memo(Navbar);
