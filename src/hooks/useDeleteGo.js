import axios from 'axios';
import useAuthHeader from 'hooks/useAuthHeader';
import {useMutation, useQueryClient} from 'react-query';
import goApi from 'util/goApi';

export default function useDeleteGo() {
	const config = useAuthHeader();
	const queryClient = useQueryClient();
	return useMutation((go) => axios.delete(goApi.gosByAlias(go.id), config), {
		onSuccess: () => {
			queryClient.invalidateQueries(goApi.gos);
		},
	});
}
