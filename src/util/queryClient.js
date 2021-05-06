import axios from 'axios';
import {QueryClient} from 'react-query';
import {API_URL, CACHE_STALE_TIME} from 'util/env';

axios.defaults.baseURL = API_URL;

const queryClient = new QueryClient({
	queries: {
		staleTime: CACHE_STALE_TIME,
	},
});

export default queryClient;
