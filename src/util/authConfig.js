/* eslint-disable react-hooks/rules-of-hooks */
import {isEmpty} from 'lodash';
import {parse, stringify} from 'query-string';

import {OIDC_AUTHORITY, OIDC_CLIENT_ID} from './env';
import history from './history';

const authQueryParams = ['authuser', 'code', 'hd', 'consent', 'scope', 'state', 'prompt'];

const authConfig = Object.freeze({
	authority: OIDC_AUTHORITY,
	clientId: OIDC_CLIENT_ID,
	redirectUri: 'http://localhost:3000',
	responseType: 'code',
	scope: 'openid profile email',
	autoSignIn: false,
	onSignIn: () => {
		// remove quth query params affter consumption. IMO this should be part of the spec
		const queryParams = parse(history.location.search);
		authQueryParams.forEach((key) => delete queryParams[key]);
		const search = isEmpty(queryParams) ? undefined : `?${stringify(queryParams)}`;
		history.replace({
			search,
			pathname: history.location.pathname,
		});
	},
});

export default authConfig;
