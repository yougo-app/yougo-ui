/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import {queryCache, useMutation, useQuery} from 'react-query';
import joinURL from 'util/joinUrl';

import containsValue from '../util/containsValue';

const endpoints = Object.freeze({
	gos: 'gos',
	go: (id) => joinURL(endpoints.gos, id),
});

const mutateGos = (mutate) => {
	return useMutation(mutate, {
		onSuccess: () => {
			queryCache.invalidateQueries(endpoints.gos);
		},
	});
};

const Gos = Object.freeze({
	findAll: () => useQuery(endpoints.gos),
	findFiltered: (filter) => {
		const response = Gos.findAll();
		return filter.length <= 2
			? response
			: {
					...response,
					data: (response.data || []).filter(containsValue(filter)),
			  };
	},
	create: () => mutateGos((go) => axios.post(endpoints.gos, go)),
	delete: () => mutateGos((id) => axios.delete(endpoints.go(id))),
	edit: () => mutateGos(({id, patch}) => axios.patch(endpoints.go(id), patch)),
});

export default Gos;
