import {combineReducers} from 'redux';
import menus from './menus';
import modals from './modals';

export default combineReducers({
	modals,
	menus,
});
