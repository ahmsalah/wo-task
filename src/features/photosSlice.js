import { createSlice } from '@reduxjs/toolkit';

const photosSlice = createSlice({
	name: 'photos',
	initialState: [],
	reducers: {
		setPhotos: (state, action) => [ ...state, ...action.payload ]
	}
});
export default photosSlice;
