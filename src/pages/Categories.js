import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import Searchbar from '../components/Searchbar';
import Grid from '../components/styled/Grid';
import { useSelector, useDispatch } from 'react-redux';
import {
	loadCategories,
	searchCategories,
	categoriesPaginationSlice
} from '../features/categoriesSlice';
import Pagination from '../components/Pagination';
import { Link } from 'react-router-dom';

const Container = styled(Grid)`
	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	a, a:hover {
		color: inherit;		
	}
	h3 {
		font-size: 1.7rem;
		font-weight: bold;
		margin: 1rem 0 1.5rem;
		max-width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		line-height: 25px;
		height: 50px;
	}
`;

function Categories() {
	const categories = useSelector(state => state.categories);
	const categoriesPagination = useSelector(state => state.categoriesPagination);
	const dispatch = useDispatch();

	useEffect(
		() => {
			dispatch(loadCategories());
		},
		[ dispatch ]
	);

	return (
		<Layout>
			<Searchbar resource="categories" loadImages={searchCategories} />
			<Container>
				{categories.map(item => {
					return (
						<div key={item.id}>
							<Link to={`/category=${item.id}`}>
								<img
									src={`https://i.picsum.photos/id/${item.id + 500}/250/250.jpg`}
									alt={item.title}
								/>
								<h3>{item.title}</h3>
							</Link>
						</div>
					);
				})}
			</Container>
			<Pagination
				loadImages={loadCategories}
				actions={categoriesPaginationSlice.actions}
				{...categoriesPagination}
			/>
		</Layout>
	);
}

export default Categories;
