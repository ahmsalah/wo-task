import { photosSlice } from '../features/photosSlice';
import { categoriesSlice } from '../features/categoriesSlice';
import { searchSlice } from '../features/searchSlice';

const rootReducer = {
	photos: photosSlice.reducer,
	categories: categoriesSlice.reducer,
	search: searchSlice.reducer
};

export default rootReducer;
