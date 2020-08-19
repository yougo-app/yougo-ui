const env = (key, defaultValue = undefined) => {
	if (window.env && key in window.env) {
		return window.env[key];
	}
	return key in process.env ? process.env[key] : defaultValue;
};

// eslint-disable-next-line import/prefer-default-export
export const API_URL = env('REACT_APP_API_URL', 'http://localhost:8080/v1');
