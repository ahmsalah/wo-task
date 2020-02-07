import { call, put, takeEvery, select } from 'redux-saga/effects';
import { fetchImages, fetchImageItem } from '../../utils/FetchImages';
import { photosSlice, photosPaginationSlice, photoItemSlice } from '../features/photosSlice';

const getQuery = state => state.search;
const getPage = state => state.photosPagination.page;
const getPhotoItemId = state => state.photoItem.selectedPhotoId;
const getCategoryId = state => state.categoryId;

function* handlePhotoItemLoad(resource) {
	try {
		const photoId = yield select(getPhotoItemId);

		const image = yield call(fetchImageItem, resource, photoId);

		yield put(photoItemSlice.actions.setPhotoItem(image));
	} catch (err) {
		console.log(err.toString());
	}
}

function* handlePhotosLoad(resource) {
	try {
		// get what the user typed in the searchbar
		const categoryId = yield select(getCategoryId);
		const query = yield select(getQuery);

		// get the current page number
		const pageNum = yield select(getPage);

		const { images, count } = yield call(fetchImages, resource, pageNum, query, categoryId);

		yield put(photosPaginationSlice.actions.setCount(count));
		yield put(photosSlice.actions.setPhotos(images));
	} catch (err) {
		// dispatch error
		// yield put(setError(err.toString()));
		console.log(err.toString());
	}
}

function* handleSearchPhotos(resource) {
	try {
		const categoryId = yield select(getCategoryId);

		const query = yield select(getQuery);
		// when user search for something, reset to page 1
		yield put(photosPaginationSlice.actions.setPage(1));

		const pageNum = yield select(getPage);
		const { images, count } = yield call(fetchImages, resource, pageNum, query, categoryId);

		yield put(photosPaginationSlice.actions.setCount(count));
		yield put(photosSlice.actions.setPhotos(images));
	} catch (err) {
		console.log(err.toString());
	}
}

export default function* watchPhotos() {
	yield takeEvery('photos/loadPhotos', handlePhotosLoad, 'photos');
	yield takeEvery('photos/searchPhotos', handleSearchPhotos, 'photos');
	yield takeEvery('photoItem/setSelectedPhotoId', handlePhotoItemLoad, 'photos');
}
