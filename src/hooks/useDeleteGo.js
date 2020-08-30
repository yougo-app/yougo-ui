import axios from 'axios';
import useAuthHeader from 'hooks/useAuthHeader';
import {queryCache, useMutation} from 'react-query';
import goApi from 'util/goApi';

export default function useDeleteGo() {
	const config = useAuthHeader();
	return useMutation((alias) => axios.delete(goApi.gosByAlias(alias), config), {
		onSuccess: () => {
			queryCache.invalidateQueries(goApi.gos);
		},
	});
}
