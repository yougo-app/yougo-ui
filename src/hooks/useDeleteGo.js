import useApiClient from 'hooks/useApiClient';
import {useMutation, useQueryClient} from 'react-query';
import {GO_QUERY_KEY, GOS_QUERY_KEY} from 'util/constants';

export default function useDeleteGo() {
	const apiClient = useApiClient();
	const queryClient = useQueryClient();
	return useMutation(({id}) => apiClient.deleteGo(id), {
		onSuccess: (_, {alias}) => {
			queryClient.invalidateQueries([GOS_QUERY_KEY]);
			queryClient.removeQueries([GO_QUERY_KEY, alias]);
		},
	});
}
