import snackbars from 'reducers/snackbars';
import {combineReducers} from 'redux';
import entities from './entities';
import gos from './gos';

export default combineReducers({
	entities,
	gos,
	snackbars,
});
