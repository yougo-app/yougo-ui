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
		return this.axios.get(`/go/${alias}`).then((response) => response.data);
	}

	listGos() {
		return this.axios.get('/gos').then((response) => response.data);
	}

	createGo(go) {
		return this.axios.post('/gos', go).then((response) => response.data);
	}

	patchGo(id, patch) {
		return this.axios.patch(`/gos/${id}`, patch).then((response) => response.data);
	}

	deleteGo(id) {
		return this.axios.delete(`/gos/${id}`).then((response) => response.data);
	}
}
