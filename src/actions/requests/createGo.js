import Client from 'api/Client';
import {CREATE_GO_FAILURE, CREATE_GO_REQUEST, CREATE_GO_SUCCESS} from 'constants/actionTypes';
import {RSAA} from 'redux-api-middleware';
import goSchema from 'schemas/goSchema';
import normalizeApiResponse from 'util/normalizeApiResponse';

const createGo = (go) => ({
	[RSAA]: {
		...Client.createGo(go.go, go.href),
		types: [
			CREATE_GO_REQUEST,
			{
				type: CREATE_GO_SUCCESS,
				payload: (action, state, res) => normalizeApiResponse(res, goSchema),
			},
			CREATE_GO_FAILURE,
		],
	},
});
export default createGo;
