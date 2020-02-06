import React, { memo } from 'react';
import styled from 'styled-components';

const Item = styled.div`
	margin: 0 1rem 3rem;
	display: flex;
`;
const ColText = styled.div`
	display: flex;
	flex-direction: column;
	h4 {
		font-size: 1.6rem;
		font-weight: 900;
		letter-spacing: 0.7px;
		text-transform: uppercase;
		margin-bottom: 1rem;
	}
	p {
		font-weight: normal;
		font-size: 12px;
		line-height: 1.8;
		letter-spacing: 0.5px;
	}
	a {
		display: block;
		font-size: 12px;
		line-height: 1.25;
		letter-spacing: 0.5px;
		text-align: left;
		color: #024d4c;
		text-decoration: none;
	}
`;
const ColImg = styled.div`
	display: flex;
	align-items: center;
	margin-right: 30px;
	width: 90px;
	img {
		width: 90px;
		min-width: 60px;
		display: block;
		max-width: 100%;
		height: auto;
	}
`;

function FeatureItem({ title, description, linkTitle, link, imgSrc }) {
	return (
		<Item>
			<ColImg>
				<img src={require(`../assets/imgs/${imgSrc}`)} alt={title} />
			</ColImg>
			<ColText>
				<h4>{title}</h4>
				<p>{description}</p>
				<a href={link}>{linkTitle}</a>
			</ColText>
		</Item>
	);
}

export default memo(FeatureItem);
