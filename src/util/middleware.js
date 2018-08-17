import thunk from 'redux-thunk';
import {apiMiddleware} from 'redux-api-middleware';
import {batchDispatchMiddleware} from 'redux-batched-actions';

export default [thunk, batchDispatchMiddleware, apiMiddleware];
