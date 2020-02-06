import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
	name: 'search',
	initialState: '',
	reducers: {
		setValue: (state, action) => action.payload,
		resetValue: () => ''
	}
});
