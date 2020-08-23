import {isEmpty} from 'lodash';
import {parse, stringify} from 'query-string';
import {OIDC_AUTHORITY, OIDC_AUTO_SIGNIN, OIDC_CLIENT_ID, OIDC_REDIRECT_URI} from 'util/env';
import history from 'util/history';

const authQueryParams = ['authuser', 'code', 'hd', 'consent', 'scope', 'state', 'prompt'];

const authConfig = Object.freeze({
	authority: OIDC_AUTHORITY,
	clientId: OIDC_CLIENT_ID,
	redirectUri: OIDC_REDIRECT_URI,
	responseType: 'code',
	scope: 'openid profile email',
	autoSignIn: OIDC_AUTO_SIGNIN,
	onSignIn: () => {
		// remove auth query params after consumption. IMO this should be part of the spec
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
