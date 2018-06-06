import {RSAA} from 'redux-api-middleware';
import Api from '../../api';
import {ActionTypes} from '../../constants';

export const getBookmarks = () => ({
	[RSAA]: {
		...Api.getBookmarks(),
		types: [ActionTypes.ALIASES_REQUEST, ActionTypes.ALIASES_SUCCESS, ActionTypes.ALIASES_FAILURE],
	},
});

export const createAlias = alias => ({
	[RSAA]: {
		...Api.createAlias(alias.alias, alias.href, alias.desc),
		types: [
			ActionTypes.CREATE_ALIAS_REQUEST,
			ActionTypes.CREATE_ALIAS_SUCCESS,
			ActionTypes.CREATE_ALIAS_FAILURE,
		],
	},
});
