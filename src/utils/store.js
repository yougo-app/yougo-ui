import {applyMiddleware, createStore} from 'redux';
import {apiMiddleware} from 'redux-api-middleware';
import {enableBatching} from 'redux-batched-actions';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../reducers';


export const setupStore = (reducer, extraMiddleware = []) => {
	let middleware = [
		...extraMiddleware,
		thunk,
		apiMiddleware,
	];

	// dev only middleware
	if(process.env.NODE_ENV !== 'production') {
		middleware = [...middleware, createLogger()];
	}

	return createStore(
		enableBatching(reducer),
		applyMiddleware(...middleware),
	);
};

export default setupStore(reducers);
