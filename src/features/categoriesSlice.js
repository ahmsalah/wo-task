import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
	name: 'categories',
	initialState: [],
	reducers: {
		setCategories: (state, action) => [ ...state, ...action.payload ]
	}
});
export default categoriesSlice;
