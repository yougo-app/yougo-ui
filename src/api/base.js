import {API_URL} from 'util/env';
import joinURL from 'util/joinUrl';

const buildUrlBase = (...pathSegments) => joinURL(API_URL, pathSegments);
const buildUrl = (endpoint, id = undefined, params = {}) => {
	const url = new URL(buildUrlBase(endpoint, id));
	Object.entries(params).forEach((key, val) => url.searchParams.append(key, val));
	return url.toString();
};

export const fetcher = (endpoint, id = undefined, params) =>
	fetch(buildUrl(endpoint, id, params)).then((response) => response.json());

export const queryConfig = {
	queries: {
		queryFn: fetcher,
		staleTime: 60 * 1000, // keep cache fresh for 60 seconds
	},
};
