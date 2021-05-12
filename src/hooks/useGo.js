import useApiClient from 'hooks/useApiClient';
import {useQuery} from 'react-query';
import {GO_QUERY_KEY} from 'util/constants';

export default function useGo(alias, options) {
	const clientAsync = useApiClient();
	return useQuery(
		[GO_QUERY_KEY, alias],
		() => clientAsync.then((api) => api.findGoByIdOrAlias(alias)),
		options
	);
}
