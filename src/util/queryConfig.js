import axios from 'axios';
import {API_URL, CACHE_STALE_TIME} from 'util/env';

axios.defaults.baseURL = API_URL;

const queryConfig = Object.freeze({
	queries: {
		staleTime: CACHE_STALE_TIME,
	},
});

export default queryConfig;
