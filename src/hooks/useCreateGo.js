import axios from 'axios';
import {useMutation, useQueryClient} from 'react-query';
import goApi from 'util/goApi';

import useAuthHeader from './useAuthHeader';

export default function useCreateGo() {
	const config = useAuthHeader();
	const queryClient = useQueryClient();
	return useMutation((go) => axios.post(goApi.gos, go, config), {
		onSuccess: () => {
			queryClient.invalidateQueries(goApi.gos);
		},
	});
}
