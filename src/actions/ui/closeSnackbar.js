import {CLOSE_SNACKBAR} from 'constants/actionTypes';
import {createAction} from 'redux-actions';

export default createAction(CLOSE_SNACKBAR, (key) => ({key}));
