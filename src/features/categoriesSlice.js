import { createSlice, createAction } from '@reduxjs/toolkit';

export const loadCategories = createAction('categories/loadCategories');

export const categoriesSlice = createSlice({
	name: 'categories',
	initialState: [],
	reducers: {
		setCategories: (state, action) => [ ...action.payload ]
	}
});
