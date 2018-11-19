import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import entities from './entities';
import uiReducer from '../util/ui/reducer';
import gos from './gos';

export default combineReducers({
	entities,
	form,
	gos,
	ui: uiReducer,
});
