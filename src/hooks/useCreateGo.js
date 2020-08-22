import axios from 'axios';
import {queryCache, useMutation} from 'react-query';
import goApi from 'util/goApi';

export default function useCreateGo() {
	return useMutation((go) => axios.post(goApi.gos, go), {
		onSuccess: () => {
			queryCache.invalidateQueries(goApi.gos);
		},
	});
}
