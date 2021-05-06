import useApiClient from 'hooks/useApiClient';
import {useQuery} from 'react-query';
import {GO_QUERY_KEY} from 'util/constants';

export default function useGo(alias, options) {
	const apiClient = useApiClient();
	return useQuery([GO_QUERY_KEY, alias], () => apiClient.getGoByAlias(alias), options);
}
