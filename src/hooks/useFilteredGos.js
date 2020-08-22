import containsValue from 'util/containsValue';

import useGos from './useGos';

export default function useFilteredGos(searchString) {
	const response = useGos();
	return searchString.length <= 2
		? response
		: {
				...response,
				data: (response.data || []).filter(containsValue(searchString)),
		  };
}
