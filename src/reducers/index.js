import {combineReducers} from 'redux';
import uiReducer from 'util/ui/reducer';
import entities from './entities';
import gos from './gos';

export default combineReducers({
	entities,
	gos,
	ui: uiReducer,
});
