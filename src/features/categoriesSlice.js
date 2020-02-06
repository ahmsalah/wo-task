import { createSlice, createAction } from '@reduxjs/toolkit';

export const loadCategories = createAction('categories/loadCategories');
export const searchCategories = createAction('categories/searchCategories');

export const categoriesSlice = createSlice({
	name: 'categories',
	initialState: [],
	reducers: {
		setCategories: (state, action) => [ ...action.payload ]
	}
});

export const categoriesPaginationSlice = createSlice({
	name: 'categoriesPagination',
	initialState: { count: 0, page: 1 },
	reducers: {
		setCount: (state, action) => ({ ...state, count: action.payload }),
		setPage: (state, action) => ({ ...state, page: action.payload }),
		nextPage: (state, action) => ({ ...state, page: state.page + 1 }),
		prevPage: (state, action) => ({ ...state, page: state.page - 1 })
	}
});
