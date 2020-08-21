const env = (key, defaultValue = undefined, prefix = 'REACT_APP_') => {
	const searchKey = prefix + key;
	if (window.env && searchKey in window.env) {
		return window.env[searchKey];
	}
	const newVar = searchKey in process.env ? process.env[searchKey] : defaultValue;
	return newVar;
};

// eslint-disable-next-line import/prefer-default-export
export const API_URL = env('API_URL', 'http://localhost:8080/v1');
export const OIDC_AUTHORITY = env('OIDC_AUTHORITY', 'https://accounts.google.com');
export const OIDC_CLIENT_ID = env('OIDC_CLIENT_ID');
export const OIDC_CLIENT_SECRET = env('OIDC_CLIENT_SECRET');
