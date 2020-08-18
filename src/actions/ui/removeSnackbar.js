import {REMOVE_SNACKBAR} from 'constants/actionTypes';
import {createAction} from 'redux-actions';

export default createAction(REMOVE_SNACKBAR, (key) => ({key}));
