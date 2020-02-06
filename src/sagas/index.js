import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchImages } from '../FetchImages';
import { photosSlice } from '../features/photosSlice';

function* handlePhotosLoad() {
	try {
		const images = yield call(fetchImages, 'photos');
		yield put(photosSlice.actions.setPhotos(images));
	} catch (err) {
		// dispatch error
		// yield put(setError(err.toString()));
		console.log(err.toString());
	}
}

export default function* rootSaga() {
	yield takeEvery('photos/loadPhotos', handlePhotosLoad);
}
