import {useQuery} from 'react-query';
import goApi from 'util/goApi';

export default function useGos() {
	return useQuery(goApi.gos);
}
