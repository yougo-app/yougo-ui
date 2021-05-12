import useApiClient from 'hooks/useApiClient';
import {useQuery} from 'react-query';
import {GOS_QUERY_KEY} from 'util/constants';

export default function useGos() {
	const clientAsync = useApiClient();
	return useQuery([GOS_QUERY_KEY], () => clientAsync.then((api) => api.listGos()));
}
