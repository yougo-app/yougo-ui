import axios from 'axios';
import useAuthHeader from 'hooks/useAuthHeader';
import {queryCache, useMutation} from 'react-query';
import goApi from 'util/goApi';

export default function useUpdateGo() {
	const config = useAuthHeader();
	return useMutation(({id, patch}) => axios.patch(goApi.gosById(id), patch, config), {
		onSuccess: () => {
			queryCache.invalidateQueries(goApi.gos);
		},
	});
}
