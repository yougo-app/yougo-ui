import ActionTypes from '../constants/ActionTypes';
import createReducer from './createReducer';

export default createReducer(ActionTypes.MODAL_OPEN, ActionTypes.MODAL_CLOSE);
