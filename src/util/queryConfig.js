import axios from 'axios';
import {API_URL, CACHE_STALE_TIME} from 'util/env';
import joinURL from 'util/joinUrl';

axios.defaults.baseURL = API_URL;

export const fetcher = (endpoint, segments = undefined, options = undefined) => {
	const url = joinURL(endpoint, ...[segments].flat());
	console.log(url);
	return axios.get(url, options).then((response) => response.data);
};

const queryConfig = Object.freeze({
	queries: {
		queryFn: fetcher,
		staleTime: CACHE_STALE_TIME,
	},
});

export default queryConfig;
