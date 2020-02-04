import React from 'react';
import { Root, FooterColLeft, FooterColCenter, FooterColRight } from './styled/footer.styled';

function Footer() {
	return (
		<Root>
			<div className="container">
				<FooterColLeft>
					<h1>Weds360</h1>
					<div className="social-media">
						<a href="https://www.facebook.com/Weds360/">
							<i className="fab fa-facebook-f" />
						</a>
						<a href="https://www.instagram.com/weds360/">
							<i className="fab fa-instagram" />
						</a>
					</div>
				</FooterColLeft>
				<FooterColCenter>
					<div>
						© Copyright <span>Plus360.</span> All Rights Reserved
					</div>
				</FooterColCenter>
				<FooterColRight>
					<div className="terms">Terms & Conditions</div>
					<div>Privacy Policy</div>
				</FooterColRight>
			</div>
		</Root>
	);
}

export default Footer;
