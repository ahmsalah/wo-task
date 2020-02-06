import React, { memo, useEffect } from 'react';
import useInputState from '../hooks/useInputState';
import styled from 'styled-components';
import Button from './styled/Button';
import theme from './styled/theme';
import { useDispatch } from 'react-redux';
import { searchSlice } from '../features/searchSlice';

const Container = styled.div`
	display: flex;
	padding: 0 6rem;
	margin: 10rem auto 5rem;
	justify-content: center;
	max-width: 85rem;

	@media ${theme.breakpoints.tablet} {
		flex-direction: column;
		padding: 0 4rem;
	}

	input {
		font-family: inherit;
		font-size: 1.5rem;
		text-align: center;
		border: 2px solid ${theme.palette.border};
		flex: 1;
		min-height: 4rem;
		text-transform: uppercase;
		font-weight: bold;
		letter-spacing: .4rem;
		width: 100%;
		height: 100%;

		&::placeholder {
			color: ${theme.palette.text.secondary};
			text-align: center;
			letter-spacing: .6rem;
		}
	}

	button:first-child {
		margin: 0 2rem;
		@media ${theme.breakpoints.tablet} {
			margin-left: 0;
			margin-right: 2rem;
		}
	}

	.btns-container {
		display: flex;
		@media ${theme.breakpoints.tablet} {
			margin-top: 3rem;
			justify-content: center;
		}
	}
`;

function Searchbar({ resource, loadImages }) {
	const [ value, handleChange, reset ] = useInputState('');
	const dispatch = useDispatch();
	const { setValue, resetValue } = searchSlice.actions;

	const handleSubmit = () => {
		dispatch(setValue(value));
		dispatch(loadImages());
	};

	const handleClear = () => {
		reset();
		dispatch(resetValue());
		dispatch(loadImages());
	};

	useEffect(
		() => {
			// clear searchbar when route changes
			dispatch(resetValue());
		},
		[ resource, dispatch, resetValue ]
	);

	return (
		<Container>
			<input
				type="text"
				placeholder="Search"
				name="value"
				onChange={handleChange}
				value={value}
			/>
			<div className="btns-container">
				<Button onClick={handleSubmit}>Apply</Button>
				<Button secondary onClick={handleClear}>
					Clear
				</Button>
			</div>
		</Container>
	);
}

export default memo(Searchbar);
