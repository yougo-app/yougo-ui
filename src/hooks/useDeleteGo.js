import useApiClient from 'hooks/useApiClient';
import {useMutation, useQueryClient} from 'react-query';
import {GO_QUERY_KEY, GOS_QUERY_KEY} from 'util/constants';

export default function useDeleteGo() {
	const clientAsync = useApiClient();
	const queryClient = useQueryClient();
	return useMutation(({id}) => clientAsync.then((api) => api.deleteGo(id)), {
		onSuccess: (_, {alias}) => {
			queryClient.invalidateQueries([GOS_QUERY_KEY]);
			queryClient.removeQueries([GO_QUERY_KEY, alias]);
		},
	});
}
