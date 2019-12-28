import {ENQUEUE_SNACKBAR} from 'constants/actionTypes';
import {createAction} from 'redux-actions';
import generateId from 'util/generateId';

export default createAction(ENQUEUE_SNACKBAR, (message, options = {}) => ({
	key: options?.key ?? generateId(),
	message,
	options,
}));
