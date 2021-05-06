import axios from 'axios';
import {useQuery} from 'react-query';
import goApi from 'util/goApi';
import joinURL from 'util/joinUrl';

import useAuthHeader from './useAuthHeader';

export default function useGo(go, options = undefined) {
	const config = useAuthHeader();
	return useQuery(
		[goApi.gos, go],
		() => axios.get(joinURL(goApi.gos, go), config).then((response) => response.data),
		options
	);
}
