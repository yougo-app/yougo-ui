import useApiGetGos from 'hooks/api/useApiGetGos';
import containsValue from 'util/containsValue';

export default function useApiGetGosFiltered(searchString) {
	const response = useApiGetGos();
	return searchString.length <= 2
		? response
		: {
				...response,
				data: (response.data || []).filter(containsValue(searchString)),
		  };
}
