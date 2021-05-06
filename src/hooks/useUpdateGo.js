import axios from 'axios';
import useAuthHeader from 'hooks/useAuthHeader';
import diff from 'object-diff';
import {useMutation, useQueryClient} from 'react-query';
import goApi from 'util/goApi';

export default function useUpdateGo() {
	const config = useAuthHeader();
	const queryClient = useQueryClient();
	return useMutation(
		({current, updated}) =>
			axios.patch(goApi.gosByAlias(current.id), diff(current, updated), config),
		{
			onSuccess: () => {
				queryClient.invalidateQueries(goApi.gos);
			},
		}
	);
}
