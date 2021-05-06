import axios from 'axios';
import {API_URL} from 'util/env';

export default class ApiClient {
	constructor({token, ...config}) {
		this.axios = axios.create({
			...config,
			baseURL: `${config.baseURL ?? API_URL}`,
			headers: {
				Authorization: `Bearer ${token}`,
				...config.headers,
			},
		});
	}

	getGoByAlias(alias) {
		return axios.get(`/go/${alias}`).then((response) => response.data);
	}

	listGos() {
		return axios.get('/gos').then((response) => response.data);
	}

	createGo(go) {
		return axios.post('/gos', go).then((response) => response.data);
	}

	patchGo(id, patch) {
		return axios.patch(`/gos/${id}`, patch).then((response) => response.data);
	}

	deleteGo(id) {
		return axios.delete(`/gos/${id}`).then((response) => response.data);
	}
}
