import axios from 'axios';
import {queryCache, useMutation} from 'react-query';
import goApi from 'util/goApi';

export default function useDeleteGo() {
	return useMutation((id) => axios.delete(goApi.gosById(id)), {
		onSuccess: () => {
			queryCache.invalidateQueries(goApi.gos);
		},
	});
}
