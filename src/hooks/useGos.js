import axios from 'axios';
import {useQuery} from 'react-query';
import goApi from 'util/goApi';

import useAuthHeader from './useAuthHeader';

export default function useGos() {
	const config = useAuthHeader();
	return useQuery(goApi.gos, () => axios.get(goApi.gos, config).then((response) => response.data));
}
