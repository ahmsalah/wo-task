import rootReducer from './features';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: rootReducer,
	middleware: [ sagaMiddleware ]
});

export default store;
