import ActionTypes from '../constants/ActionTypes';
import createReducer from './createReducer';

export default createReducer(ActionTypes.MENU_OPEN, ActionTypes.MENU_CLOSE);
