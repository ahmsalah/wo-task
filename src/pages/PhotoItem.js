import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { photoItemSlice } from '../features/photosSlice';

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
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					margin: '5rem'
				}}>
				<h1>{item.title}</h1>
				<p>{item.description}</p>
				<p>{item.uploader}</p>
				<img
					src={`https://i.picsum.photos/id/${parseInt(slug) + 500}/250/250.jpg`}
					alt={item.title}
				/>
			</div>
		</Layout>
	);
}

export default PhotoItem;
