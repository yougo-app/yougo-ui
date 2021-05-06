import useApiClient from 'hooks/useApiClient';
import {useMutation, useQueryClient} from 'react-query';
import {GOS_QUERY_KEY} from 'util/constants';

export default function useCreateGo() {
	const apiClient = useApiClient();
	const queryClient = useQueryClient();
	return useMutation((go) => apiClient.createGo(go), {
		onSuccess: () => {
			queryClient.invalidateQueries([GOS_QUERY_KEY]);
		},
	});
}
