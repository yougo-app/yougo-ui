import axios from 'axios';
import {useQuery} from 'react-query';
import goApi from 'util/goApi';
import joinURL from 'util/joinUrl';

import useAuthHeader from './useAuthHeader';

export default function useGo(go, options = undefined) {
	const config = useAuthHeader();
	return useQuery(
		[goApi.go, go],
		(path, id) => axios.get(joinURL(path, id), config).then((response) => response.data),
		options
	);
}
