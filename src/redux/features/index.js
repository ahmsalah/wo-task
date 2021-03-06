import { photosSlice, photosPaginationSlice, photoItemSlice } from './photosSlice';

import { categoriesSlice, categoriesPaginationSlice, categoryIdSlice } from './categoriesSlice';
import { searchSlice } from './searchSlice';
import { languageSlice } from './languageSlice';

const rootReducer = {
	photos: photosSlice.reducer,
	photosPagination: photosPaginationSlice.reducer,
	photoItem: photoItemSlice.reducer,
	categories: categoriesSlice.reducer,
	categoriesPagination: categoriesPaginationSlice.reducer,
	categoryId: categoryIdSlice.reducer,
	search: searchSlice.reducer,
	language: languageSlice.reducer
};

export default rootReducer;
