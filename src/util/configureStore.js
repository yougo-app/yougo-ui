import {applyMiddleware, compose, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import devMiddleware from './devMiddleware';
import middleware from './middleware';

export default reducer => {
	const enhancer =
		process.env.NODE_ENV === 'production'
			? applyMiddleware(...middleware)
			: compose(
					composeWithDevTools,
					applyMiddleware(...devMiddleware),
			  );

	return createStore(reducer, enhancer);
};
