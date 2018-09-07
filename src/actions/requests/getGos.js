import {RSAA} from 'redux-api-middleware';
import Client from '../../api/Client';
import {GOS_FAILURE, GOS_REQUEST, GOS_SUCCESS} from '../../constants/actionTypes';
import goSchema from '../../schemas/goSchema';
import normalizeApiResponse from '../../util/normalizeApiResponse';

export default () => ({
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
