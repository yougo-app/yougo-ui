import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import devMiddleware from './devMiddleware';
import middleware from './middleware';

const configureStore = (reducer) => {
	const enhancer =
		process.env.NODE_ENV === 'production'
			? applyMiddleware(...middleware)
			: composeWithDevTools(applyMiddleware(...devMiddleware));

	return createStore(reducer, enhancer);
};
export default configureStore;
