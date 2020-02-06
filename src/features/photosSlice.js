import { createSlice, createAction } from '@reduxjs/toolkit';

export const loadPhotos = createAction('photos/loadPhotos');

export const photosSlice = createSlice({
	name: 'photos',
	initialState: [],
	reducers: {
		setPhotos: (state, action) => [ ...state, ...action.payload ]
	}
});
