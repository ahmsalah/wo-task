import photosSlice from '../features/photosSlice';
import categoriesSlice from '../features/categoriesSlice';

const rootReducer = {
	photos: photosSlice.reducer,
	categories: categoriesSlice.reducer
};

export default rootReducer;
