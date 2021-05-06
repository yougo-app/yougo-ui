import useApiClient from 'hooks/useApiClient';
import {useQuery} from 'react-query';
import {GOS_QUERY_KEY} from 'util/constants';

export default function useGos() {
	const client = useApiClient();
	return useQuery([GOS_QUERY_KEY], () => client.listGos());
}
