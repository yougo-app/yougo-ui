import {API_URL, OIDC_AUTHORITY, OIDC_CLIENT_ID, OIDC_REDIRECT_URI} from 'util/env';

const authConfig = Object.freeze({
	domain: OIDC_AUTHORITY,
	clientId: OIDC_CLIENT_ID,
	redirectUri: OIDC_REDIRECT_URI,
	audience: API_URL,
	cacheLocation: 'localstorage',
	useRefreshTokens: true,
});

export default authConfig;
