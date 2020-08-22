import axios from 'axios';
import {queryCache, useMutation} from 'react-query';
import goApi from 'util/goApi';

export default function useUpdateGo() {
	return useMutation(({id, patch}) => axios.patch(goApi.go(id), patch), {
		onSuccess: () => {
			queryCache.invalidateQueries(goApi.gos);
		},
	});
}
