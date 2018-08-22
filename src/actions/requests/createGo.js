import {RSAA} from 'redux-api-middleware';
import Client from '../../api/Client';
import ActionTypes from '../../constants/ActionTypes';

export default go => ({
	[RSAA]: {
		...Client.createGo(go.go, go.href),
		types: [
			ActionTypes.CREATE_GO_REQUEST,
			ActionTypes.CREATE_GO_SUCCESS,
			ActionTypes.CREATE_GO_FAILURE,
		],
	},
});
