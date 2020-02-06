import { photosSlice, photosPaginationSlice } from './photosSlice';

import { categoriesSlice, categoriesPaginationSlice } from './categoriesSlice';
import { searchSlice } from './searchSlice';

const rootReducer = {
	photos: photosSlice.reducer,
	photosPagination: photosPaginationSlice.reducer,
	categories: categoriesSlice.reducer,
	categoriesPagination: categoriesPaginationSlice.reducer,
	search: searchSlice.reducer
};

export default rootReducer;
