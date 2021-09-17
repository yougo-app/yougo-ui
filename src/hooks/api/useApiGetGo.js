import useApiClient from 'hooks/api/useApiClient';
import {useQuery} from 'react-query';
import {GO_QUERY_KEY} from 'util/constants';

export default function useApiGetGo(alias, options) {
	const clientAsync = useApiClient();
	return useQuery(
		[GO_QUERY_KEY, alias],
		() => clientAsync.then((api) => api.findGoByIdOrAlias(alias)),
		options
	);
}
