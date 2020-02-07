import { call, put, takeEvery, select } from 'redux-saga/effects';
import { fetchImages } from '../../utils/FetchImages';
import { categoriesSlice, categoriesPaginationSlice } from '../features/categoriesSlice';

const getQuery = state => state.search;
const getPage = state => state.categoriesPagination.page;

function* handleCategoriesLoad(resource) {
	try {
		// get what the user typed in the searchbar
		const query = yield select(getQuery);

		// get the current page number
		const pageNum = yield select(getPage);

		const { images, count } = yield call(fetchImages, resource, pageNum, query);

		yield put(categoriesPaginationSlice.actions.setCount(count));
		yield put(categoriesSlice.actions.setCategories(images));
	} catch (err) {
		// dispatch error
		// yield put(setError(err.toString()));
		console.log(err.toString());
	}
}

function* handleSearchCategories(resource) {
	try {
		const query = yield select(getQuery);
		// when user search for something, reset to page 1
		yield put(categoriesPaginationSlice.actions.setPage(1));

		const pageNum = yield select(getPage);
		const { images, count } = yield call(fetchImages, resource, pageNum, query);

		yield put(categoriesPaginationSlice.actions.setCount(count));
		yield put(categoriesSlice.actions.setCategories(images));
	} catch (err) {
		console.log(err.toString());
	}
}

export default function* watchCategories() {
	yield takeEvery('categories/loadCategories', handleCategoriesLoad, 'categories');
	yield takeEvery('categories/searchCategories', handleSearchCategories, 'categories');
}
