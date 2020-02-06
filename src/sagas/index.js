import { call, put, takeEvery, select } from 'redux-saga/effects';
import { fetchImages } from '../utils/FetchImages';
import { photosSlice } from '../features/photosSlice';
import { categoriesSlice } from '../features/categoriesSlice';

function* handleImagesLoad(resource) {
	try {
		const images = yield call(fetchImages, resource);
		if (resource === 'photos') {
			yield put(photosSlice.actions.setPhotos(images));
		} else if (resource === 'categories') {
			yield put(categoriesSlice.actions.setCategories(images));
		}
	} catch (err) {
		// dispatch error
		// yield put(setError(err.toString()));
		console.log(err.toString());
	}
}

const getQuery = state => state.search;

function* handleSearchImages(resource) {
	try {
		const query = yield select(getQuery);
		const images = yield call(fetchImages, resource, query);
		if (resource === 'photos') {
			yield put(photosSlice.actions.setPhotos(images));
		} else if (resource === 'categories') {
			yield put(categoriesSlice.actions.setCategories(images));
		}
	} catch (err) {
		console.log(err.toString());
	}
}

export default function* rootSaga() {
	yield takeEvery('photos/loadPhotos', handleImagesLoad, 'photos');
	yield takeEvery('photos/searchPhotos', handleSearchImages, 'photos');
	yield takeEvery('categories/loadCategories', handleImagesLoad, 'categories');
	yield takeEvery('photos/searchCategories', handleSearchImages, 'categories');
}
