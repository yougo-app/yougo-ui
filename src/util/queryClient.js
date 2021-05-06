import {QueryClient} from 'react-query';
import {CACHE_STALE_TIME} from 'util/env';

const queryClient = new QueryClient({
	queries: {
		staleTime: CACHE_STALE_TIME,
	},
});

export default queryClient;
