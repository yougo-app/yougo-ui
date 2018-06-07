import {RSAA} from 'redux-api-middleware';
import Client from '../api/Client';
import ActionTypes from '../constants/ActionTypes';

export default () => ({
	[RSAA]: {
		...Client.getBookmarks(),
		types: [ActionTypes.ALIASES_REQUEST, ActionTypes.ALIASES_SUCCESS, ActionTypes.ALIASES_FAILURE],
	},
});
