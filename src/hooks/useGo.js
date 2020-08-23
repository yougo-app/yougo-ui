import {useQuery} from 'react-query';
import goApi from 'util/goApi';

export default function useGo(go, options = undefined) {
	return useQuery([goApi.go, go], options);
}
