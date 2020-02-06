import { createSlice, createAction } from '@reduxjs/toolkit';

export const loadCategories = createAction('categories/loadCategories');
export const searchCategories = createAction('photos/searchCategories');

export const categoriesSlice = createSlice({
	name: 'categories',
	initialState: [],
	reducers: {
		setCategories: (state, action) => [ ...action.payload ]
	}
});
