import { all } from 'redux-saga/effects';
import photosSaga from './photosSaga';
import categoriesSaga from './categoriesSaga';

export default function* rootSaga() {
	yield all([ photosSaga(), categoriesSaga() ]);
}
