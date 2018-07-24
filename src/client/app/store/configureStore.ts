
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import { rootReducer } from './reducers';
import rootSaga from './sagas';

export const configureStore = (history, initialState = {}) => {
	const sagaMiddleware: SagaMiddleware<any> = createSagaMiddleware();
	const middleware = [routerMiddleware(history), sagaMiddleware];

	const composeEnhancers = process.env.NODE_ENV !== 'production'
		&& (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose;

	const enhancer = composeEnhancers(applyMiddleware(...middleware));

	const store = createStore(
		rootReducer,
		initialState,
		enhancer
	);

	sagaMiddleware.run(rootSaga);

	return store;
};
