import rootReducer from './features';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import { configureStore } from '@reduxjs/toolkit';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: rootReducer,
	middleware: [ sagaMiddleware ]
});
sagaMiddleware.run(rootSaga);

export default store;
