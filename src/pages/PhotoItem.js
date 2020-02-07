import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { photoItemSlice } from '../redux/features/photosSlice';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../components/styled/theme';
const Container = styled.div`
	display: flex;
	padding: 7rem 4rem;
	max-width: 110rem;
	margin: 0 auto;
	@media ${theme.breakpoints.tablet} {
		flex-direction: column;
		padding: 7rem 4rem 4rem;
	}
`;
const ImgContainer = styled.div`
	flex: .65;

	@media ${theme.breakpoints.tablet} {
		flex: 1;
	}
	img {
		display: block;
		max-width: 100%;
		height: auto;
	}
`;
const TextContainer = styled.div`
	flex: .35;
	padding: 2rem 2.5rem;
	@media ${theme.breakpoints.tablet} {
		flex: 1;
	}
	h2 {
		font-size: 3.5rem;
		font-weight: bold;
		margin-bottom: 3.5rem;
		@media ${theme.breakpoints.laptop} {
			font-size: 2.5rem;
		}
	}

	h5 {
		font-size: 2.3rem;
		margin-bottom: 2rem;
		@media ${theme.breakpoints.laptop} {
			font-size: 1.8rem;
		}
	}

	.social-media {
		display: flex;
		justify-content: center;
	}
	i.fa-facebook-f:before {
		padding-left: 2px;
	}

	i {
		border-radius: 50%;
		height: 2.5rem;
		width: 2.5rem;
		background-color: #000;
		font-size: 20px;
		padding-left: 7px;
		padding-top: 6px;
		color: #fff;
		margin-right: 5px;
	}
`;

function PhotoItem() {
	const item = useSelector(state => state.photoItem.photoItem);
	const dispatch = useDispatch();
	let { slug } = useParams();

	useEffect(
		() => {
			dispatch(photoItemSlice.actions.setSelectedPhotoId(slug));
		},
		[ dispatch, slug ]
	);

	return (
		<Layout>
			<Container>
				<ImgContainer>
					<img
						src={`https://i.picsum.photos/id/${parseInt(slug) + 500}/800/800.jpg`}
						alt={item.title}
					/>
				</ImgContainer>
				<TextContainer>
					<h2>{item.title}</h2>
					<h5>{item.description}</h5>
					<h5>
						<Link to="">{item.uploader}</Link>
					</h5>
					<div className="social-media">
						<a
							rel="noopener noreferrer"
							target="_blank"
							href="http://www.facebook.com/sharer.php?u=https://weds360.com/en/photos/396">
							<i className="fab fa-facebook-f" aria-hidden="true" />
						</a>
						<a
							rel="noopener noreferrer"
							target="_blank"
							href="https://twitter.com/share?url=https://weds360.com/en/photos/396">
							<i className="fab fa-twitter" aria-hidden="true" />
						</a>
					</div>
				</TextContainer>
			</Container>
		</Layout>
	);
}

export default PhotoItem;
