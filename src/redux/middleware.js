import thunk from 'redux-thunk';
import {apiMiddleware} from 'redux-api-middleware';
import {batchDispatchMiddleware} from 'redux-batched-actions';

const middleware = [thunk, batchDispatchMiddleware, apiMiddleware];
export default middleware;
