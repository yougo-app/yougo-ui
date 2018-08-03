import {RSAA} from 'redux-api-middleware';
import Client from '../api/Client';
import ActionTypes from '../constants/ActionTypes';

export default () => ({
	[RSAA]: {
		...Client.getGos(),
		types: [ActionTypes.GOS_REQUEST, ActionTypes.GOS_SUCCESS, ActionTypes.GOS_FAILURE],
	},
});
