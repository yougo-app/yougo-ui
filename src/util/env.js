function env(key, defaultValue = undefined, prefix = 'REACT_APP_') {
	const searchKey = prefix + key;
	if (window.env && searchKey in window.env) {
		return window.env[searchKey];
	}
	return searchKey in process.env ? process.env[searchKey] : defaultValue;
}

export const API_URL = env('API_URL', 'http://localhost:8080');
export const OIDC_AUTHORITY = env('OIDC_AUTHORITY');
export const OIDC_CLIENT_ID = env('OIDC_CLIENT_ID');
export const OIDC_REDIRECT_URI = env('OIDC_REDIRECT_URI', window.location.origin);
export const CACHE_STALE_TIME = parseInt(env('CACHE_STALE_TIME', '60000'), 10);
