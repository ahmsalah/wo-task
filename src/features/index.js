import { photosSlice, photosPaginationSlice, photoItemSlice } from './photosSlice';

import { categoriesSlice, categoriesPaginationSlice } from './categoriesSlice';
import { searchSlice } from './searchSlice';

const rootReducer = {
	photos: photosSlice.reducer,
	photosPagination: photosPaginationSlice.reducer,
	photoItem: photoItemSlice.reducer,
	categories: categoriesSlice.reducer,
	categoriesPagination: categoriesPaginationSlice.reducer,
	search: searchSlice.reducer
};

export default rootReducer;
