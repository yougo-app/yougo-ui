import axios from 'axios';
import {queryCache, useMutation} from 'react-query';
import goApi from 'util/goApi';

import useAuthHeader from './useAuthHeader';

export default function useCreateGo() {
	const config = useAuthHeader();
	return useMutation((go) => axios.post(goApi.gos, go, config), {
		onSuccess: () => {
			queryCache.invalidateQueries(goApi.gos);
		},
	});
}
