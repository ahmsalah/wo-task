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


	.overlay {
		position: relative;
		z-index: 100;
		div {
			position: absolute;
			height: 100%;
			width: 100%;
			background-color: rgba(0,0,0,0.25);
			img {
				margin-top: 4rem;
			}
			h3 {
				font-size: 2.5rem;
				font-weight: 900;
				color: #fff;
				margin: 1rem 0 0;
				max-width: 100%;
				overflow: hidden;
				text-overflow: ellipsis;
				line-height: 25px;
				height: 50px;
			}
		}
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
								<div className="overlay">
									<div>
										<img
											src="https://weds360-production.s3.eu-west-1.amazonaws.com/store/category/4/icon/big-667cc1c0e6d022eeb13c8bb96fe45d16.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIA3XIBZMGBAF2YAFWK%2F20200207%2Feu-west-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20200207T122121Z&amp;X-Amz-Expires=900&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=0d5133ce18364fa6d8ec54cfe4eb90fef7fcab0800ad7c179f8e1ebf2a610c54"
											alt=""
										/>
										<h3>{item.title}</h3>
									</div>
									<img
										src={`https://i.picsum.photos/id/${item.id +
											1082}/350/250.jpg`}
										alt={item.title}
									/>
								</div>
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
