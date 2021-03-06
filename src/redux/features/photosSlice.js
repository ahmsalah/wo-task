import { createSlice, createAction } from '@reduxjs/toolkit';

export const loadPhotos = createAction('photos/loadPhotos');
export const searchPhotos = createAction('photos/searchPhotos');
export const loadPhotosFromCategory = createAction('photos/loadPhotosFromCategory');

export const photosSlice = createSlice({
	name: 'photos',
	initialState: [],
	reducers: {
		setPhotos: (state, action) => [ ...action.payload ]
	}
});

export const photosPaginationSlice = createSlice({
	name: 'photosPagination',
	initialState: { count: 0, page: 1 },
	reducers: {
		setCount: (state, action) => ({ ...state, count: action.payload }),
		setPage: (state, action) => ({ ...state, page: action.payload }),
		nextPage: (state, action) => ({ ...state, page: state.page + 1 }),
		prevPage: (state, action) => ({ ...state, page: state.page - 1 })
	}
});

export const photoItemSlice = createSlice({
	name: 'photoItem',
	initialState: { selectedPhotoId: 0, photoItem: '' },
	reducers: {
		setPhotoItem: (state, action) => ({ ...state, photoItem: action.payload }),
		setSelectedPhotoId: (state, action) => ({ ...state, selectedPhotoId: action.payload })
	}
});
