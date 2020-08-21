/* eslint-disable react-hooks/rules-of-hooks */
import {OIDC_AUTHORITY, OIDC_CLIENT_ID, OIDC_CLIENT_SECRET} from './env';

const authConfig = Object.freeze({
	authority: OIDC_AUTHORITY,
	clientId: OIDC_CLIENT_ID,
	clientSecret: OIDC_CLIENT_SECRET,
	redirectUri: 'http://localhost:3000',
	responseType: 'code',
	scope: 'openid profile email',
	autoSignIn: true,
});

export default authConfig;
