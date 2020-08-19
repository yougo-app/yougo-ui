/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import {useMutation, useQuery, useQueryCache} from 'react-query';
import joinURL from 'util/joinUrl';

const endpoints = Object.freeze({
	gos: 'gos',
	go: (id) => joinURL(endpoints.gos, id),
});

const mutateGos = (mutate) => {
	return useMutation(mutate, {
		onSuccess: () => {
			useQueryCache().invalidateQueries(endpoints.gos);
		},
	});
};

const Gos = Object.freeze({
	findAll: () => useQuery(endpoints.gos),
	create: () => mutateGos((go) => axios.post(endpoints.gos, go)),
	delete: () => mutateGos((id) => axios.delete(endpoints.go(id))),
	edit: () => mutateGos((id, patch) => axios.patch(endpoints.go(id), patch)),
});

export default Gos;
