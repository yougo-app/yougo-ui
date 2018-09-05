import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import entities from './entities';
import uiReducer from '../util/ui/reducer';

export default combineReducers({
	entities,
	form,
	ui: uiReducer,
});
