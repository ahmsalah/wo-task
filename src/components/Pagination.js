import React, { memo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Container = styled.div`
	margin-bottom: 6rem;

	.b-pagination-outer {
		width: 100%;
		margin: 0 auto;
		text-align: center;
		overflow: hidden;
		display: flex;
	}
	.pagination {
		margin: 0 auto;
		padding: 0;
		text-align: center;
	}
	.pagination li {
		display: inline;
	}
	.pagination li a {
		display: block;
		text-decoration: none;
		color: #024d4c;
		padding: 6px 12px;
		border: 1px solid #ddd;
		float: left;
	}
	.pagination li a {
		transition: background-color 0.4s;
	}
	.pagination li:first-child a {
		border-bottom-left-radius: 4px;
		border-top-left-radius: 4px;
	}
	.pagination li:last-child a {
		border-bottom-right-radius: 4px;
		border-top-right-radius: 4px;
	}
	.pagination li a.active {
		background-color: #024d4c;
		color: #fff;
	}
	.pagination li a:hover:not(.active) {
		background: #ddd;
	}

	.pagination > .disabled > a,
	.pagination > .disabled > a:hover,
	.pagination > .disabled > a:focus {
		color: #777777;
		background-color: #fff !important;
		border-color: #ddd;
		cursor: not-allowed;
	}
`;

function Pagination({ count, page, loadImages, actions }) {
	const numOfPages = Math.ceil(count / 9);
	const pageNumsArray = Array.from(Array(numOfPages).keys(), v => v + 1);
	const dispatch = useDispatch();

	return count > 1 ? (
		<Container>
			<div className="b-pagination-outer">
				<ul className="pagination">
					<li className={page <= 1 ? 'disabled' : undefined}>
						<Link
							to="#"
							onClick={() => {
								if (page > 1) {
									dispatch(actions.prevPage());
									dispatch(loadImages());
								}
							}}>
							← Previous
						</Link>
					</li>
					{pageNumsArray.map(v => (
						<li key={v}>
							<Link
								to="#"
								onClick={() => {
									dispatch(actions.setPage(v));
									dispatch(loadImages());
								}}
								className={v === page ? 'active' : undefined}>
								{v}
							</Link>
						</li>
					))}
					<li className={page >= numOfPages ? 'disabled' : undefined}>
						<Link
							to="#"
							onClick={() => {
								if (page < numOfPages) {
									dispatch(actions.nextPage());
									dispatch(loadImages());
								}
							}}>
							Next →
						</Link>
					</li>
				</ul>
			</div>
		</Container>
	) : null;
}

export default memo(Pagination);
