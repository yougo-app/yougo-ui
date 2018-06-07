import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import entities from './entities';
import ui from './ui';

export default combineReducers({
	entities,
	form,
	ui,
});
