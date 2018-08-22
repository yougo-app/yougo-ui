import {RSAA} from 'redux-api-middleware';
import Client from '../api/Client';
import ActionTypes from '../constants/ActionTypes';

export default id => ({
	[RSAA]: {
		...Client.deleteGo(id),
		types: [
			ActionTypes.DELETE_GO_REQUEST,
			{
				type: ActionTypes.DELETE_GO_SUCCESS,
				payload: () => ({id}),
			},
			ActionTypes.DELETE_GO_FAILURE,
		],
	},
});
