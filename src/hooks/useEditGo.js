import useApiClient from 'hooks/useApiClient';
import diff from 'object-diff';
import {useMutation, useQueryClient} from 'react-query';
import {GO_QUERY_KEY, GOS_QUERY_KEY} from 'util/constants';

export default function useEditGo() {
	const clientAsync = useApiClient();
	const queryClient = useQueryClient();
	return useMutation(
		({current, updated}) =>
			clientAsync.then((api) => api.patchGo(current.id, diff(current, updated))),
		{
			onSuccess: (_, {alias}) => {
				queryClient.invalidateQueries([GOS_QUERY_KEY]);
				queryClient.invalidateQueries([GO_QUERY_KEY, alias]);
			},
		}
	);
}
