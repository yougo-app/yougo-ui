import {RSAA} from 'redux-api-middleware';
import Client from '../api/Client';
import ActionTypes from '../constants/ActionTypes';

export default alias => ({
	[RSAA]: {
		...Client.createAlias(alias.alias, alias.href, alias.desc),
		types: [
			ActionTypes.CREATE_ALIAS_REQUEST,
			ActionTypes.CREATE_ALIAS_SUCCESS,
			ActionTypes.CREATE_ALIAS_FAILURE,
		],
	},
});
