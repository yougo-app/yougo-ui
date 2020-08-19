import axios from 'axios';
import {API_URL} from 'util/env';
import joinURL from 'util/joinUrl';

axios.defaults.baseURL = API_URL;

export const fetcher = (endpoint, id = undefined, options = undefined) => {
	return axios.get(joinURL(endpoint, id), options).then((response) => response.data);
};

export const queryConfig = {
	queries: {
		queryFn: fetcher,
		staleTime: 60 * 1000, // keep cache fresh for 60 seconds
	},
};
