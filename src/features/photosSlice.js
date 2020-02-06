import { createSlice, createAction } from '@reduxjs/toolkit';

export const loadPhotos = createAction('photos/loadPhotos');
export const searchPhotos = createAction('photos/searchPhotos');

export const photosSlice = createSlice({
	name: 'photos',
	initialState: [],
	reducers: {
		setPhotos: (state, action) => [ ...action.payload ]
	}
});
