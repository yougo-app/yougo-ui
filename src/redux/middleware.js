import {apiMiddleware} from 'redux-api-middleware';
import {batchDispatchMiddleware} from 'redux-batched-actions';
import thunk from 'redux-thunk';

const middleware = [thunk, batchDispatchMiddleware, apiMiddleware];
export default middleware;
