import Client from 'api/Client';
import {DELETE_GO_FAILURE, DELETE_GO_REQUEST, DELETE_GO_SUCCESS} from 'constants/actionTypes';
import {RSAA} from 'redux-api-middleware';

const deleteGo = (id) => ({
	[RSAA]: {
		...Client.deleteGo(id),
		types: [
			DELETE_GO_REQUEST,
			{
				type: DELETE_GO_SUCCESS,
				payload: () => ({id}),
			},
			DELETE_GO_FAILURE,
		],
	},
});
export default deleteGo;
