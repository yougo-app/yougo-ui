import Client from 'api/Client';
import {GOS_FAILURE, GOS_REQUEST, GOS_SUCCESS} from 'constants/actionTypes';
import {RSAA} from 'redux-api-middleware';
import goSchema from 'schemas/goSchema';
import normalizeApiResponse from 'util/normalizeApiResponse';

const getGos = () => ({
	[RSAA]: {
		...Client.getGos(),
		types: [
			GOS_REQUEST,
			{
				type: GOS_SUCCESS,
				payload: (action, state, res) => normalizeApiResponse(res, [goSchema]),
			},
			GOS_FAILURE,
		],
	},
});
export default getGos;
