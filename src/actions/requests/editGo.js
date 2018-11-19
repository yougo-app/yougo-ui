import {RSAA} from 'redux-api-middleware';
import Client from '../../api/Client';
import {EDIT_GO_FAILURE, EDIT_GO_REQUEST, EDIT_GO_SUCCESS} from '../../constants/actionTypes';
import goSchema from '../../schemas/goSchema';
import normalizeApiResponse from '../../util/normalizeApiResponse';

export default (id, patch) => ({
	[RSAA]: {
		...Client.editGo(id, patch),
		types: [
			EDIT_GO_REQUEST,
			{
				type: EDIT_GO_SUCCESS,
				payload: (action, state, res) => normalizeApiResponse(res, goSchema),
			},
			EDIT_GO_FAILURE,
		],
	},
});
