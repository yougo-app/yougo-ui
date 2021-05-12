import useApiClient from 'hooks/useApiClient';
import {useMutation, useQueryClient} from 'react-query';
import {GOS_QUERY_KEY} from 'util/constants';

export default function useCreateGo() {
	const clientAsync = useApiClient();
	const queryClient = useQueryClient();
	return useMutation((go) => clientAsync.then((api) => api.createGo(go)), {
		onSuccess: () => {
			queryClient.invalidateQueries([GOS_QUERY_KEY]);
		},
	});
}
